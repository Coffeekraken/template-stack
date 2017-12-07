import Vue from 'vue/dist/vue'

export default Vue.component('template-stack-page-switcher', {
	props: ['pages'],
	computed: {
		select: function() {
			const options = [];
			Object.keys(this.pages).forEach((pageId) => {
				const page = this.pages[pageId];
				options.push(`
					<option value="${page.url}">
						${page.title}
					</option>
				`);
			});

			return `
				<select is="ts-select" onchange="document.location.href = this.options[this.selectedIndex].value;">
					${options.join('')}
				</select>
			`
		}
	},
	template: `
		<div class="page-switcher">
			<div class="page-switcher__container">
				<div v-html="select"></div>
			</div>
		</div>
	`,
	mounted: function() {
		const select = this.$el.querySelector('select');
		setTimeout(() => {
			select.focus();
		}, 200);
	}
});
