<template>
    <div div id="faq_section">
        <div class="faqtitle_header">
            <h3 class="title_bg">고객센터</h3>
        </div>

        <div class="faq_box">
            <Menu click="3" />
            <div class="faq_r">
                <div class="faq_r_header">
                    <h3>FAQ</h3>
                </div>
                <div class="accordion-container">
                    <div class="faq-acco" v-for="(faq, idx) in faqlist_list" :key="idx">
                        <div class="accordion-label label01" @click="this.openAccordion(idx)">
                            <p>{{ faq.question }}</p>
                            <i :class="this.accordions[idx] ? 'i_icon up' : 'i_icon down'"></i>
                        </div>
                        <div class="accordion-cont" ref="panel" :class="this.accordions[idx] ? 'open' : 'close'">
                            <div class="text-wrap">
                                <strong>A.</strong>
                                <div v-html="faq.answer"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useCommonStore, useFaqStore } from '@/_stores';
import Menu from '/src/components/cscenter/Menu.vue'

export default {
    components: {
        Menu
    },
    setup() {
        const commonStore = useCommonStore();
        const faqStore = useFaqStore();

        return {
            commonStore,
            faqStore,
        }
    },

    data() {
        return {
            faqlist_list: [],
            accordions: []
        }
    },
    methods: {
        getList() {
            this.faqlist_list = [];
            this.faqStore.list().then((resp) => {
                if (resp.data.code == 200) {
                    this.faqlist_list = resp.data.body;
                    this.accordions = Array(this.faqlist_list.length).fill(false);
                }
            }).catch(err => {
                console.log("err", err);
            });
        },
        closeAllAccordion() {
            this.accordions.forEach((_, idx) => {
                this.accordions[idx] = false;
            })
        },
        openAccordion(idx) {
            this.closeAllAccordion();
            this.accordions[idx] = true;
        },
    },
    mounted() {
        this.commonStore.getField();
        this.getList();
    }
}
</script>

