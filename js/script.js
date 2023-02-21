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
                    program: "Lorem ipsum facilis optio perspiciatis unde suscipit corrupti."
                },
                {
                    event: "Coaching Sessions",
                    date: "24 Mar 18:00 PM",
                    program: "Lorem ipsum facilis optio perspiciatis unde suscipit corrupti."
                },
                {
                    event: "Coaching Sessions",
                    date: "12 Feb 13:30 PM",
                    program: "Lorem ipsum facilis optio perspiciatis unde suscipit corrupti."
                },

            ],
            latestCourses: [
                {
                    logo: "Decisions-icon",
                    course: "Make Better Decisions",
                    teacher: "Teacher: James Collins",
                    price: "$21.00"
                },
                {
                    logo: "Speaker-icon",
                    course: "How to be a speaker",
                    teacher: "Teacher: James Collins",
                    price: "Free"
                },
                {
                    logo: "Network-icon",
                    course: "Network Introduction",
                    teacher: "Teacher: James Collins",
                    price: "Free"
                },
                {
                    logo: "Brand-icon",
                    course: "Brand Management",
                    teacher: "Teacher: James Collins",
                    price: "Free"
                },

            ],
            partners: [
                {
                    partner: "partner-2",
                },
                {
                    partner: "partner-3",
                },
                {
                    partner: "partner-4",
                },
                {
                    partner: "partner-5",
                },
                {
                    partner: "partner-6",
                },
                {
                    partner: "partner-8",
                },
                {
                    partner: "partner-1",
                },
                {
                    partner: "partner-7",
                },


            ],

            footerNav: {
                logo: "theme_eduprime_logo",
                text: "EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities, courses, secondary schools etc.",
                buttons: [
                    {
                        imgBtn: "svg-3.svg",
                        textBtn: "Purchase Theme"
                    },
                    {
                        imgBtn: "svg-2.svg",
                        textBtn: "Related Themes"
                    }
                ],

                socialMedias: [
                    {
                        facebook: "",
                    },
                    {
                        twitter: "",
                    },
                    {
                        instagram: "",
                    },
                ],

                navItemsGetEdu: [
                    {
                        link: "Request a website",
                    },
                    {
                        link: "Browse Themes",
                    },
                    {
                        link: "Payment options",
                    },
                    {
                        link: "Support System",
                    },
                    {
                        link: "Checkout",
                    },
                    {
                        link: "Purchase Theme",
                    },
                ],

                navItemsNetworking: [
                    {
                        link: "Purchase Theme",
                    },
                    {
                        link: "Our Benefits",
                    },
                    {
                        link: "Our Team",
                    },
                    {
                        link: "Our Services",
                    },
                    {
                        link: "Other Products",
                    },
                    {
                        link: "My account",
                    },
                ],

                categories: [
                    {
                        categorie: "ECONOMY",
                        visible: false,
                    },
                    {
                        categorie: "DESIGN",
                        visible: false,
                    },
                    {
                        categorie: "COACHING",
                        visible: false,
                    },
                    {
                        categorie: "BUSINESS",
                        visible: false,
                    },
                    {
                        categorie: "MEDICINE",
                        visible: false,
                    },
                    {
                        categorie: "LAW",
                        visible: false,
                    },
                    {
                        categorie: "FITNESS",
                        visible: false,
                    },
                ],

            },
            search: "",

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