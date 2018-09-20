import './index.css';
import('../render/about').then(function (page) {
    // 渲染页面
    console.log(page);
    page.render();
    console.log(page.render());
});

