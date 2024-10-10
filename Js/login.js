// 获取按钮和消息显示区域的引用
const button = document.getElementById('myButton');
const messageDiv = document.getElementById('message');

// 添加点击事件监听器
button.addEventListener('click', function () {
  messageDiv.textContent = '你点击了按钮！'; // 设置消息
});