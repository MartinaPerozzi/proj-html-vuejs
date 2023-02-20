// Configurazione Vue
const app = Vue.createApp({
    data: function () {
        return {
            headerNavbar: {
                logo: "theme_eduprime_logo",
                navItems: [
                    {
                        nav: "Home",
                        dropdown: true,
                    },
                    {
                        nav: "Courses",
                        dropdown: true,
                    },
                    {
                        nav: "About Us",
                        dropdown: false,
                    },
                    {
                        nav: "News",
                        dropdown: true,
                    },
                    {
                        nav: "Pages",
                        dropdown: true,
                    },
                    {
                        nav: "Contact",
                        dropdown: false,
                    },
                    {
                        nav: "Purchase",
                        dropdown: false,
                    },
                    {
                        nav: "",
                        buttonText: "VIEW COURSES",
                        dropdown: false,
                    },
                ],

            },

            faculties: [
                {
                    img: "Gavel-v2",
                    facultie: "Law Faculty",
                },
                {
                    img: "Coins-tabs-v2",
                    facultie: "Economy",
                },
                {
                    img: "Medicine-tabs-v2",
                    facultie: "Medicine",
                },
                {
                    img: "Computer-tabs-v2",
                    facultie: "Computer Science",
                },
                {
                    img: "Palette-tabs-v2",
                    facultie: "Graphic Design",
                }

            ],
            events: [
                {
                    event: "Coaching Sessions",
                    date: "20 May 23:30 PM",
                    program: "Loremipsum"
                },
                {
                    event: "Coaching Sessions",
                    date: "24 Mar 18:00 PM",
                    program: "Loremipsum"
                },
                {
                    event: "Coaching Sessions",
                    date: "12 Feb 13:30 PM",
                    program: "Loremipsum"
                },

            ]

        }
    },

    computed: {
        lastNavLink() {
            let lastItem = this.headerNavbar.navItems.length - 1;
            console.log(lastItem);
            return lastItem;
        }
    },

});
app.mount("#app");