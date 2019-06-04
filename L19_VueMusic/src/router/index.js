import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from "@/pages/home"
import Artists from "@/pages/artists"
import Listcate from "@/pages/listcate"
import Search from "@/pages/search"
import Ucenter from "@/pages/ucenter"
import HotList from "@/pages/musiclist/hot_list"
import KingList from "@/pages/musiclist/king_list"
import NewsList from "@/pages/musiclist/news_list"
import MoreList from "@/pages/morelist"
import MusicPlay from "@/pages/MusicPlay"
import ArtistsDetails from "@/pages/artistsDetails/artistsDetails"
Vue.use(Router)

export default new Router({
    routes: [{
        path: "/musicplay",
        name: "MusicPlay",
        component: MusicPlay
    }, {
        path: '/',
        name: 'Index',
        redirect: "home",
        component: Index,
        children: [{
                path: "home",
                redirect: "/home/hot",
                component: Home,
                children: [{
                        path: "hot",
                        component: HotList
                    },
                    {
                        path: "king",
                        component: KingList
                    },
                    {
                        path: "news",
                        component: NewsList
                    }
                ]
            }, {
                path: "artists",
                component: Artists
            }, {
                path: "listcate",
                component: Listcate
            }, {
                path: "search",
                component: Search
            }, {
                path: "ucenter",
                component: Ucenter
            },
            {
                path: "more",
                name: "MoreList",
                component: MoreList
            }, {
                path: "artistsdetails",
                name: "ArtistsDetails",
                component: ArtistsDetails
            }
        ]
    }]
})