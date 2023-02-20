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