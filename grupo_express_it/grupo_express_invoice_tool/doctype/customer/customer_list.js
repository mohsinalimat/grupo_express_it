frappe.listview_settings['Customer'] = {
    hide_name_column: true,

    before_render() {
        localStorage.show_sidebar = "false"
    }
}