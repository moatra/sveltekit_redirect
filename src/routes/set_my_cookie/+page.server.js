import {redirect} from "@sveltejs/kit";

export function load(event) {
    event.cookies.set('my_cookie', 'is_delicious');
    throw redirect(303, '/foo');
}