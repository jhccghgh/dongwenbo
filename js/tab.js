/**
 * 作者：董文博 | 建立时间：2026-11-04 | 使用大模型：GLM-5.3-Flash | 功能：可复用的 tab 选项卡
 * 结构约定：.wy_tabs 容器内包含 .wy_tab_item（导航项）与 .wy_tab_panel（内容面板），
 *          选中状态通过 wy_active 类控制，导航项与面板按顺序一一对应。
 * 可复用性：页面上可以有任意多个 .wy_tabs 容器，加载时会被全部初始化。
 */

/**
 * 函数主要功能：切换到指定索引的选项卡。
 * 先清除该组内所有导航项和内容面板的选中状态（移除 wy_active），
 * 然后再设置当前索引对应的导航项和面板为选中状态。
 */
function wy_switchTab(wy_items, wy_panels, wy_index) {
    // 1. 先清除所有选项卡及面板的选中状态
    wy_items.forEach(function (wy_item) {
        wy_item.classList.remove('wy_active');
    });
    wy_panels.forEach(function (wy_panel) {
        wy_panel.classList.remove('wy_active');
    });
    // 2. 再设置当前元素的选中状态
    wy_items[wy_index].classList.add('wy_active');
    wy_panels[wy_index].classList.add('wy_active');
}

/**
 * 函数主要功能：初始化一组选项卡（可复用的入口）。
 * 为容器内每个导航项绑定点击监听事件，点击时调用 wy_switchTab 切换。
 */
function wy_initTabs(wy_container) {
    var wy_items = wy_container.querySelectorAll('.wy_tab_item');
    var wy_panels = wy_container.querySelectorAll('.wy_tab_panel');

    // 为每个选项卡注册点击监听事件
    wy_items.forEach(function (wy_item, wy_index) {
        wy_item.addEventListener('click', function () {
            wy_switchTab(wy_items, wy_panels, wy_index);
        });
    });
}

// 函数主要功能：页面加载完成后，初始化页面中所有 .wy_tabs 选项卡组（保证组件可复用）
document.querySelectorAll('.wy_tabs').forEach(wy_initTabs);
