const SVGIcons = {
    "Apple": {
        draw: function(ctx){
            ctx.save();
            ctx.strokeStyle="rgba(0,0,0,0)";
            ctx.miterLimit=4;
            ctx.scale(0.09828009828009827,0.09828009828009827);
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(788.1,340.9);
            ctx.bezierCurveTo(782.3,345.4,679.9,403.1,679.9,531.4);
            ctx.bezierCurveTo(679.9,679.8,810.2,732.3,814.1,733.6);
            ctx.bezierCurveTo(813.5,736.8,793.4,805.5,745.4,875.5);
            ctx.bezierCurveTo(702.6,937.1,657.9,998.6,589.9,998.6);
            ctx.bezierCurveTo(521.9,998.6,504.4,959.1,425.9,959.1);
            ctx.bezierCurveTo(349.4,959.1,322.2,999.9,260,999.9);
            ctx.bezierCurveTo(197.8,999.9,154.4,942.9,104.5,872.9);
            ctx.bezierCurveTo(46.7,790.7,0,663,0,541.8);
            ctx.bezierCurveTo(0,347.4,126.4,244.3,250.8,244.3);
            ctx.bezierCurveTo(316.9,244.3,372,287.7,413.5,287.7);
            ctx.bezierCurveTo(453,287.7,514.6,241.7,589.8,241.7);
            ctx.bezierCurveTo(618.3,241.7,720.7,244.3,788.1,340.9);
            ctx.closePath();

            ctx.moveTo(554.1,159.4);
            ctx.bezierCurveTo(585.2,122.5,607.2,71.3,607.2,20.1);
            ctx.bezierCurveTo(607.2,13,606.6,5.8,605.3,0);
            ctx.bezierCurveTo(554.7,1.9,494.5,33.7,458.2,75.8);
            ctx.bezierCurveTo(429.7,108.2,403.1,159.4,403.1,211.3);
            ctx.bezierCurveTo(403.1,219.1,404.4,226.9,405,229.4);
            ctx.bezierCurveTo(408.2,230,413.4,230.7,418.6,230.7);
            ctx.bezierCurveTo(464,230.7,521.1,200.3,554.1,159.4);
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