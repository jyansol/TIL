# JAVASCRIPT 08. Fun with HTML5 Canvas

# View Source

    <script>
        const canvas = document.querySelector('#draw'); //#draw를 const에 담고
        const ctx = canvas.getContext('2d'); //CanvasRenderingContext2D을 얻기위해 "2d"로 지정 ??
        canvas.width = window.innerWidth; //window의 width가 아니고 window안의 width ??
        canvas.height = window.innerHeight; 
        ctx.strokeStyle = '#BADA55'; //무엇 ??
        ctx.lineJoin = 'round'; //선이 만나는 지점
        ctx.lineCap = 'round'; //선이 끝나는 지점
        ctx.lineWidth = 100; //선의 두께
        // ctx.globalCompositeOperation = 'multiply';

        let isDrawing = false; 
        let lastX = 0; 
        let lastY = 0;
        let hue = 0;
        let direction = true;

        function draw(e) {
            if (!isDrawing) return; // stop the fn from running when they are not moused down
        // true 면 return; ? 왜 이렇게 쓰는거지
        // mousedown 하지 않으면 return; 
            console.log(e);
            ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; //=''; ??
            ctx.beginPath(); //새로운 path를 만듬. 의미 ?? 새로운 무언가를 만든다 ??
        // start from
            ctx.moveTo(lastX, lastY); 
        // go to
            ctx.lineTo(e.offsetX, e.offsetY); 
            ctx.stroke();
            [lastX, lastY] = [e.offsetX, e.offsetY]; //[] ??
        // 자유로운 선 ? 을 그리기위해 필요한 조건 ? 들

            hue++; // mousedown 하면 hue++ , hue가 ++된다는게 무슨 의미
        // 로직 짜는게 어렵다 . 
        if (hue >= 360) {
            hue = 0;
        }
        if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
            direction = !direction;
        } // 이 부분은 뭘 나타낸거지

        if(direction) {
            ctx.lineWidth++; //lineWidth++ ??
        } else {
            ctx.lineWidth--; // -- ???
        } 

        }

        canvas.addEventListener('mousedown', (e) => { //(e)로 표현하는 이유
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
        }); // draw(e);를 어디에 쓸건지 


        canvas.addEventListener('mousemove', draw); //draw ??
        canvas.addEventListener('mouseup', () => isDrawing = false); 
        canvas.addEventListener('mouseout', () => isDrawing = false);

    </script>


# MEMO
- 코드에 입력한 부분들...!!