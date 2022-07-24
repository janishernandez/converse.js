import { CustomElement } from 'shared/components/element.js';
import { converse, _converse, api } from "@converse/headless/core";
import { JINGLE_CALL_STATUS } from "./constants.js";
import tpl_toolbar_button from "./templates/toolbar-button.js";

const { Strophe, $msg } = converse.env;
const u = converse.env.utils;

export default class JingleToolbarButton extends CustomElement {

    static get properties() {
        return {
            'jid': { type: String },
        }
    }

    initialize() {
        this.model = _converse.chatboxes.get(this.jid);
        this.listenTo(this.model, 'change:jingle_status', () => this.requestUpdate());
    }
    
    render() {
        return tpl_toolbar_button(this);
    }

    toggleJingleCallStatus() {
        const jingle_status = this.model.get('jingle_status');
        if ( jingle_status === JINGLE_CALL_STATUS.OUTGOING_PENDING || jingle_status === JINGLE_CALL_STATUS.ACTIVE) {
            this.model.save('jingle_status', JINGLE_CALL_STATUS.ENDED);
            const initiator_stanza = this.model.messages.findWhere({ 'media': 'audio' });
            const propose_id = initiator_stanza.attributes.propose_id;
            const message_id = u.getUniqueId();
            api.send(
                $msg({
                'from': _converse.bare_jid,
                'to': this.jid,
                'type': 'chat',
                id: message_id
                }).c('retract', { 'xmlns': Strophe.NS.JINGLEMESSAGE, 'id': propose_id })
                .c('reason', { 'xmlns': Strophe.NS.JINGLE })
                .c('cancel', {}).up()
                .t('Retracted').up().up()
                .c('store', { 'xmlns': Strophe.NS.HINTS })
            );
            const attrs = {
                'from': _converse.bare_jid,
                'to': this.jid,
                'type': 'chat',
                'retract_id': propose_id, 
                'msg_id': message_id
            }
            this.model.messages.create(attrs);
            return;
        }
        if (!jingle_status || jingle_status === JINGLE_CALL_STATUS.ENDED) {
            this.model.save('jingle_status', JINGLE_CALL_STATUS.OUTGOING_PENDING);
            const propose_id = u.getUniqueId();
            const message_id = u.getUniqueId();
            api.send(
                $msg({
                    'from': _converse.bare_jid,
                    'to': this.jid,
                    'type': 'chat',
                    'id': message_id,
                }).c('propose', {'xmlns': Strophe.NS.JINGLEMESSAGE, 'id': propose_id })
                .c('description', {'xmlns': Strophe.NS.JINGLERTP, 'media': 'audio'}).up().up()
                .c('store', { 'xmlns': Strophe.NS.HINTS })
            );
            const attrs = {
                'from': _converse.bare_jid,
                'to': this.jid,
                'type': 'chat',
                'msg_id': message_id, 
                'propose_id': propose_id,
                'media': 'audio'
            }
            this.model.messages.create(attrs);
            return;
        }
    }
}

api.elements.define('converse-jingle-toolbar-button', JingleToolbarButton);
