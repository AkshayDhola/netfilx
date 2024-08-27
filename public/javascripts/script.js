function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ./images/male00001.jpg
       ./images/male00002.jpg
       ./images/male00003.jpg
       ./images/male00004.jpg
       ./images/male00005.jpg
       ./images/male00006.jpg
       ./images/male00007.jpg
       ./images/male00008.jpg
       ./images/male00009.jpg
       ./images/male00010.jpg
       ./images/male00011.jpg
       ./images/male00012.jpg
       ./images/male00013.jpg
       ./images/male00014.jpg
       ./images/male00015.jpg
       ./images/male00016.jpg
       ./images/male00017.jpg
       ./images/male00018.jpg
       ./images/male00019.jpg
       ./images/male00020.jpg
       ./images/male00021.jpg
       ./images/male00022.jpg
       ./images/male00023.jpg
       ./images/male00024.jpg
       ./images/male00025.jpg
       ./images/male00026.jpg
       ./images/male00027.jpg
       ./images/male00028.jpg
       ./images/male00029.jpg
       ./images/male00030.jpg
       ./images/male00031.jpg
       ./images/male00032.jpg
       ./images/male00033.jpg
       ./images/male00034.jpg
       ./images/male00035.jpg
       ./images/male00036.jpg
       ./images/male00037.jpg
       ./images/male00038.jpg
       ./images/male00039.jpg
       ./images/male00040.jpg
       ./images/male00041.jpg
       ./images/male00042.jpg
       ./images/male00043.jpg
       ./images/male00044.jpg
       ./images/male00045.jpg
       ./images/male00046.jpg
       ./images/male00047.jpg
       ./images/male00048.jpg
       ./images/male00049.jpg
       ./images/male00050.jpg
       ./images/male00051.jpg
       ./images/male00052.jpg
       ./images/male00053.jpg
       ./images/male00054.jpg
       ./images/male00055.jpg
       ./images/male00056.jpg
       ./images/male00057.jpg
       ./images/male00058.jpg
       ./images/male00059.jpg
       ./images/male00060.jpg
       ./images/male00061.jpg
       ./images/male00062.jpg
       ./images/male00063.jpg
       ./images/male00064.jpg
       ./images/male00065.jpg
       ./images/male00066.jpg
       ./images/male00067.jpg
       ./images/male00068.jpg
       ./images/male00069.jpg
       ./images/male00070.jpg
       ./images/male00071.jpg
       ./images/male00072.jpg
       ./images/male00073.jpg
       ./images/male00074.jpg
       ./images/male00075.jpg
       ./images/male00076.jpg
       ./images/male00077.jpg
       ./images/male00078.jpg
       ./images/male00079.jpg
       ./images/male00080.jpg
       ./images/male00081.jpg
       ./images/male00082.jpg
       ./images/male00083.jpg
       ./images/male00084.jpg
       ./images/male00085.jpg
       ./images/male00086.jpg
       ./images/male00087.jpg
       ./images/male00088.jpg
       ./images/male00089.jpg
       ./images/male00090.jpg
       ./images/male00091.jpg
       ./images/male00092.jpg
       ./images/male00093.jpg
       ./images/male00094.jpg
       ./images/male00095.jpg
       ./images/male00096.jpg
       ./images/male00097.jpg
       ./images/male00098.jpg
       ./images/male00099.jpg
       ./images/male00100.jpg
       ./images/male00101.jpg
       ./images/male00102.jpg
       ./images/male00103.jpg
       ./images/male00104.jpg
       ./images/male00105.jpg
       ./images/male00106.jpg
       ./images/male00107.jpg
       ./images/male00108.jpg
       ./images/male00109.jpg
       ./images/male00110.jpg
       ./images/male00111.jpg
       ./images/male00112.jpg
       ./images/male00113.jpg
       ./images/male00114.jpg
       ./images/male00115.jpg
       ./images/male00116.jpg
       ./images/male00117.jpg
       ./images/male00118.jpg
       ./images/male00119.jpg
       ./images/male00120.jpg
       ./images/male00121.jpg
       ./images/male00122.jpg
       ./images/male00123.jpg
       ./images/male00124.jpg
       ./images/male00125.jpg
       ./images/male00126.jpg
       ./images/male00127.jpg
       ./images/male00128.jpg
       ./images/male00129.jpg
       ./images/male00130.jpg
       ./images/male00131.jpg
       ./images/male00132.jpg
       ./images/male00133.jpg
       ./images/male00134.jpg
       ./images/male00135.jpg
       ./images/male00136.jpg
       ./images/male00137.jpg
       ./images/male00138.jpg
       ./images/male00139.jpg
       ./images/male00140.jpg
       ./images/male00141.jpg
       ./images/male00142.jpg
       ./images/male00143.jpg
       ./images/male00144.jpg
       ./images/male00145.jpg
       ./images/male00146.jpg
       ./images/male00147.jpg
       ./images/male00148.jpg
       ./images/male00149.jpg
       ./images/male00150.jpg
       ./images/male00151.jpg
       ./images/male00152.jpg
       ./images/male00153.jpg
       ./images/male00154.jpg
       ./images/male00155.jpg
       ./images/male00156.jpg
       ./images/male00157.jpg
       ./images/male00158.jpg
       ./images/male00159.jpg
       ./images/male00160.jpg
       ./images/male00161.jpg
       ./images/male00162.jpg
       ./images/male00163.jpg
       ./images/male00164.jpg
       ./images/male00165.jpg
       ./images/male00166.jpg
       ./images/male00167.jpg
       ./images/male00168.jpg
       ./images/male00169.jpg
       ./images/male00170.jpg
       ./images/male00171.jpg
       ./images/male00172.jpg
       ./images/male00173.jpg
       ./images/male00174.jpg
       ./images/male00175.jpg
       ./images/male00176.jpg
       ./images/male00177.jpg
       ./images/male00178.jpg
       ./images/male00179.jpg
       ./images/male00180.jpg
       ./images/male00181.jpg
       ./images/male00182.jpg
       ./images/male00183.jpg
       ./images/male00184.jpg
       ./images/male00185.jpg
       ./images/male00186.jpg
       ./images/male00187.jpg
       ./images/male00188.jpg
       ./images/male00189.jpg
       ./images/male00190.jpg
       ./images/male00191.jpg
       ./images/male00192.jpg
       ./images/male00193.jpg
       ./images/male00194.jpg
       ./images/male00195.jpg
       ./images/male00196.jpg
       ./images/male00197.jpg
       ./images/male00198.jpg
       ./images/male00199.jpg
       ./images/male00200.jpg
       ./images/male00201.jpg
       ./images/male00202.jpg
       ./images/male00203.jpg
       ./images/male00204.jpg
       ./images/male00205.jpg
       ./images/male00206.jpg
       ./images/male00207.jpg
       ./images/male00208.jpg
       ./images/male00209.jpg
       ./images/male00210.jpg
       ./images/male00211.jpg
       ./images/male00212.jpg
       ./images/male00213.jpg
       ./images/male00214.jpg
       ./images/male00215.jpg
       ./images/male00216.jpg
       ./images/male00217.jpg
       ./images/male00218.jpg
       ./images/male00219.jpg
       ./images/male00220.jpg
       ./images/male00221.jpg
       ./images/male00222.jpg
       ./images/male00223.jpg
       ./images/male00224.jpg
       ./images/male00225.jpg
       ./images/male00226.jpg
       ./images/male00227.jpg
       ./images/male00228.jpg
       ./images/male00229.jpg
       ./images/male00230.jpg
       ./images/male00231.jpg
       ./images/male00232.jpg
       ./images/male00233.jpg
       ./images/male00234.jpg
       ./images/male00235.jpg
       ./images/male00236.jpg
       ./images/male00237.jpg
       ./images/male00238.jpg
       ./images/male00239.jpg
       ./images/male00240.jpg
       ./images/male00241.jpg
       ./images/male00242.jpg
       ./images/male00243.jpg
       ./images/male00244.jpg
       ./images/male00245.jpg
       ./images/male00246.jpg
       ./images/male00247.jpg
       ./images/male00248.jpg
       ./images/male00249.jpg
       ./images/male00250.jpg
       ./images/male00251.jpg
       ./images/male00252.jpg
       ./images/male00253.jpg
       ./images/male00254.jpg
       ./images/male00255.jpg
       ./images/male00256.jpg
       ./images/male00257.jpg
       ./images/male00258.jpg
       ./images/male00259.jpg
       ./images/male00260.jpg
       ./images/male00261.jpg
       ./images/male00262.jpg
       ./images/male00263.jpg
       ./images/male00264.jpg
       ./images/male00265.jpg
       ./images/male00266.jpg
       ./images/male00267.jpg
       ./images/male00268.jpg
       ./images/male00269.jpg
       ./images/male00270.jpg
       ./images/male00271.jpg
       ./images/male00272.jpg
       ./images/male00273.jpg
       ./images/male00274.jpg
       ./images/male00275.jpg
       ./images/male00276.jpg
       ./images/male00277.jpg
       ./images/male00278.jpg
       ./images/male00279.jpg
       ./images/male00280.jpg
       ./images/male00281.jpg
       ./images/male00282.jpg
       ./images/male00283.jpg
       ./images/male00284.jpg
       ./images/male00285.jpg
       ./images/male00286.jpg
       ./images/male00287.jpg
       ./images/male00288.jpg
       ./images/male00289.jpg
       ./images/male00290.jpg
       ./images/male00291.jpg
       ./images/male00292.jpg
       ./images/male00293.jpg
       ./images/male00294.jpg
       ./images/male00295.jpg
       ./images/male00296.jpg
       ./images/male00297.jpg
       ./images/male00298.jpg
       ./images/male00299.jpg
       ./images/male00300.jpg
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;

  const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



  