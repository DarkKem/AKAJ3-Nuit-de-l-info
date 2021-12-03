import Router from 'next/router'
import {server} from "../config";

export async function customFetch(url, context) {
    const cookie = context.req?.headers.cookie;

    const resp = await fetch(url, {
        headers: {
            cookie: cookie
        }
    });
    if (resp.status === 401 && !context.req) {
        await Router.replace('/auth/login');
        return {};
    }
    if (resp.status === 401 && context.req) {
        context.res?.writeHead(302, {
            Location: `${server}auth/login`
        });
        context.res?.end();
        return;
    }
    return await resp.json();
}