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
                        dropdownItems: [
                            "About Us",
                            "Faculties",
                        ],
                        pop: false,
                    },
                    {
                        nav: "Courses",
                        dropdown: true,
                        dropdownItems: [
                            "Law",
                            "Economy",
                            "Medicine",
                            "Computer Science",
                            "Graphic Design",
                        ],
                    },
                    {
                        nav: "About Us",
                        dropdown: false,
                    },
                    {
                        nav: "News",
                        dropdown: true,
                        dropdownItems: [
                            "News Law",
                            "News Economy",
                            "News Medicine",
                            "Latest Courses",
                        ],
                    },
                    {
                        nav: "Pages",
                        dropdown: true,
                        dropdownItems: [
                            "Courses",
                            "Open day",
                            "About",
                            "Q&A",
                        ],
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
                    imgSection: "Law.png"
                },
                {
                    img: "Coins-tabs-v2",
                    facultie: "Economy",
                    imgSection: "Economy.png"
                },
                {
                    img: "Medicine-tabs-v2",
                    facultie: "Medicine",
                    imgSection: "Medicine.png"
                },
                {
                    img: "Computer-tabs-v2",
                    facultie: "Computer Science",
                    imgSection: "Computer-Science.png"
                },
                {
                    img: "Palette-tabs-v2",
                    facultie: "Graphic Design",
                    imgSection: "Graphic-Design.png"
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
                    teacher: "James Collins",
                    price: "$21.00"
                },
                {
                    logo: "Speaker-icon",
                    course: "How to be a speaker",
                    teacher: "James Collins",
                    price: "Free"
                },
                {
                    logo: "Network-icon",
                    course: "Network Introduction",
                    teacher: "James Collins",
                    price: "Free"
                },
                {
                    logo: "Brand-icon",
                    course: "Brand Management",
                    teacher: "James Collins",
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
                        social: "fa-brands fa-facebook-f",
                    },
                    {
                        social: "fa-brands fa-twitter",
                    },
                    {
                        social: "fa-brands fa-square-instagram",
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
            facultieIndex: 0,
        }
    },

    computed: {
        lastNavLink() {
            let lastItem = this.headerNavbar.navItems.length - 1;
            console.log(lastItem);
            return lastItem;
        }
    },
    methods: {

        activeFacultie(index) {
            this.facultieIndex = index

        },
    },



});
app.mount("#app");