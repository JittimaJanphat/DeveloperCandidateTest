import User from "./pages/Users";
import About from "./pages/About";
import UserCreate from "./pages/UserCreate";
import Posts from "./pages/Post";
import PostsDetail from "./pages/PostDetail";
import PostsCreate from "./pages/PostCreate";

// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'user-route',
        title: 'User',
        path: '/',
        enabled: true,
        component: User
    },
    {
        key: 'about-route',
        title: 'About',
        path: '/about/:id',
        enabled: true,
        component: About
    },
    {
        key: 'userCreate-route',
        title: 'UserCreate',
        path: '/userCreate',
        enabled: true,
        component: UserCreate
    },
    {
        key: 'post-route',
        title: 'Posts',
        path: '/posts',
        enabled: true,
        component: Posts
    },
    {
        key: 'postDetail-route',
        title: 'PostDetail',
        path: '/postDetail/:id',
        enabled: true,
        component: PostsDetail
    },
    {
        key: 'postCreate-route',
        title: 'PostCreate',
        path: '/postCreate',
        enabled: true,
        component: PostsCreate
    }
]

export const routesP: Array<Route> = [
    {
        key: 'user-route',
        title: 'User',
        path: '/',
        enabled: true,
        component: User
    },
    {
        key: 'products-route',
        title: 'Posts',
        path: '/posts',
        enabled: true,
        component: Posts
    }
]