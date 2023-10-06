import {redirect} from "@sveltejs/kit";

export function load(event) {
    const my_cookie = event.cookies.get('my_cookie');
    if (!my_cookie) {
        throw redirect(303, '/set_my_cookie');
    }
    return {
        my_cookie
    }
}