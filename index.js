// phina.js をグローバル領域に展開
phina.globalize();

const SCREEN_WIDTH = 640; // 横幅
const SCREEN_HEIGHT = 960; // 縦幅

// MainScene クラスを定義
phina.define('MainScene', {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit();
    // 背景色を指定
    this.backgroundColor = '#444';
    let shape = Shape().addChildTo(this);
    shape.backgroundColor = 'white';

    shape.x = 320;
    shape.y = 480;
    this.update  = function(e) {
        // 移動
        shape.x = e.pointer.x;
        shape.y = e.pointer.y;
    };
  },
});
// メイン処理
phina.main(function() {
  // アプリケーション生成
  const app = GameApp({
    startLabel: 'main', // メインシーンから開始する
    width: SCREEN_WIDTH, // 横幅
    height: SCREEN_HEIGHT, // 縦幅
  });
  // アプリケーション実行
  app.run();
});