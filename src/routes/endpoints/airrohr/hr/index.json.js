import send from '@polka/send';
import generate_docs from '../../../../utils/generate_docs.js';

let json;

export function get(req, res) {
    if (!json || process.env.NODE_ENV !== 'production') {
        json = JSON.stringify(generate_docs('airrohr/hr'));
    }

    send(res, 200, json, {
        'Content-Type': 'application/json'
    });
	
}
