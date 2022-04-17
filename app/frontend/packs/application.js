// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import Vue from 'vue/dist/vue.esm'
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'scripts'
import 'styles'

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// vue.js

import list from '../components/list.vue'
import draggable from 'vuedraggable'
import store from 'stores/list.js'
import { mapGetters, mapActions } from 'vuex'

document.addEventListener('turbolinks:load', function(event){
	let el = document.querySelector("#board");
	if(el){
		new Vue({
			el,
			store,
      computed: {
        // ...mapGetters(["lists"])
        lists: {
          get() {
            return this.$store.state.lists;
          }, 

          set(value) {
            this.$store.commit('UPDATE_LISTS', value);
          }
        }
      },
			components: { list , draggable },
      methods: {
        ...mapActions(["loadList", "moveList"]), 
      }, 
			beforeMount(){
				this.loadList();



			}
		});
	}
})
