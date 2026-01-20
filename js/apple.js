const SVGIcons = {
    "Apple": {
        draw: function(ctx){
            ctx.save();
            ctx.strokeStyle="rgba(0,0,0,0)";
            ctx.miterLimit=4;
            ctx.scale(0.09828009828009827,0.09828009828009827);
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(788, 341);
			ctx.bezierCurveTo(782, 345, 680, 403, 680, 531);
			ctx.bezierCurveTo(680, 680, 810, 732, 814, 734);
			ctx.bezierCurveTo(814, 737, 793, 806, 745, 876);
			ctx.bezierCurveTo(703, 937, 658, 999, 590, 999);
			ctx.bezierCurveTo(522, 999, 504, 959, 426, 959);
			ctx.bezierCurveTo(349, 959, 322, 1000, 260, 1000);
			ctx.bezierCurveTo(198, 1000, 154, 943, 105, 873);
			ctx.bezierCurveTo(47, 791, 0, 663, 0, 542);
			ctx.bezierCurveTo(0, 347, 126, 244, 251, 244);
			ctx.bezierCurveTo(317, 244, 372, 288, 414, 288);
			ctx.bezierCurveTo(453, 288, 515, 242, 590, 242);
			ctx.bezierCurveTo(618, 242, 721, 244, 788, 341);
			ctx.closePath();

			ctx.moveTo(554, 159);
			ctx.bezierCurveTo(585, 123, 607, 71, 607, 20);
			ctx.bezierCurveTo(607, 13, 607, 6, 605, 0);
			ctx.bezierCurveTo(555, 2, 495, 34, 458, 76);
			ctx.bezierCurveTo(430, 108, 403, 159, 403, 211);
			ctx.bezierCurveTo(403, 219, 404, 227, 405, 229);
			ctx.bezierCurveTo(408, 230, 413, 231, 419, 231);
			ctx.bezierCurveTo(464, 231, 521, 200, 554, 159);
            ctx.closePath();

            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
        }
    }
};
function initCanvasAndDraw() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  SVGIcons["Apple"].draw(ctx);
}
window.addEventListener('load', initCanvasAndDraw);

const colorPicker = document.getElementById("colorPicker");
const logo = document.getElementById("logo");

// Open color picker when clicking the logo
logo.addEventListener("click", () => {
  colorPicker.click();
});

// Change logo color
colorPicker.addEventListener("input", () => {
  logo.setAttribute("fill", colorPicker.value);

});
document.getElementById("iphone14pro-learn").addEventListener("click", function (e) {
  e.preventDefault();

  Swal.fire({
    title: 'Patrik Cigoj',
    icon: 'info',
    iconColor: '#000000',      // črna info ikona
    confirmButtonText: 'OK',
    confirmButtonColor: '#000000', // črn OK gumb
    color: '#000000'           // črna barva besedila
  });
});

