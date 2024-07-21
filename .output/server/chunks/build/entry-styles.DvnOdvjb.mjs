const main = `@import url("https://fonts.googleapis.com/css2?family=Instrument+Sans&display=swap");@import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@300&display=swap");
/*! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-feature-settings:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.pointer-events-none{pointer-events:none}.visible{visibility:visible}.invisible{visibility:hidden}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.bottom-0{bottom:0}.bottom-20{bottom:5rem}.left-0{left:0}.top-0{top:0}.top-20{top:5rem}.col-span-1{grid-column:span 1/span 1}.col-span-16{grid-column:span 16/span 16}.col-span-3{grid-column:span 3/span 3}.col-span-6{grid-column:span 6/span 6}.col-span-7{grid-column:span 7/span 7}.col-start-1{grid-column-start:1}.col-start-10{grid-column-start:10}.col-start-7{grid-column-start:7}.col-start-9{grid-column-start:9}.m-auto{margin:auto}.ml-0{margin-left:0}.ml-17vw{margin-left:17vw}.ml-33\\%{margin-left:33%}.mt-4{margin-top:1rem}.mt-50vh{margin-top:50vh}.mt-6{margin-top:1.5rem}.mt-8{margin-top:2rem}.block{display:block}.inline{display:inline}.flex{display:flex}.grid{display:grid}.inline-grid{display:inline-grid}.h-auto{height:auto}.h-full{height:100%}.h-screen{height:100vh}.w-10{width:2.5rem}.w-33\\%{width:33%}.w-50vw{width:50vw}.w-66\\%{width:66%}.w-auto{width:auto}.w-full{width:100%}.w-screen{width:100vw}.max-w-40vw{max-width:40vw}.shrink-0{flex-shrink:0}.-translate-x-1\\/2{--tw-translate-x:-50%}.-translate-x-1\\/2,.-translate-y-1\\/2{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y:-50%}.cursor-pointer{cursor:pointer}.snap-x{scroll-snap-type:x var(--tw-scroll-snap-strictness)}.snap-mandatory{--tw-scroll-snap-strictness:mandatory}.snap-start{scroll-snap-align:start}.snap-end{scroll-snap-align:end}.auto-rows-1em{grid-auto-rows:1em}.grid-cols-10{grid-template-columns:repeat(10,minmax(0,1fr))}.grid-cols-24{grid-template-columns:repeat(24,1fr)}.flex-col{flex-direction:column}.items-end{align-items:flex-end}.justify-between{justify-content:space-between}.gap-20px{gap:20px}.gap-6px{gap:6px}.self-center{align-self:center}.overflow-scroll{overflow:scroll}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.border-b-\\.6{border-bottom-width:.6px}.border-t-\\.6{border-top-width:.6px}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity))}.bg-darkgrey{--tw-bg-opacity:1;background-color:rgb(34 34 34/var(--tw-bg-opacity))}.bg-lightgrey{--tw-bg-opacity:1;background-color:rgb(234 234 234/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.object-cover{-o-object-fit:cover;object-fit:cover}.p-20px{padding:20px}.py-2{padding-bottom:.5rem;padding-top:.5rem}.pt-20vh{padding-top:20vh}.text-right{text-align:right}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-5xl{font-size:3rem;line-height:1}.text-base{font-size:1rem}.text-l{font-size:1.2rem}.text-s{font-size:.8rem}.font-bold{font-weight:700}.uppercase{text-transform:uppercase}.leading-normal{line-height:1.5}.leading-tight{line-height:1.25}.\\!text-black{--tw-text-opacity:1!important;color:rgb(0 0 0/var(--tw-text-opacity))!important}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.underline{text-decoration-line:underline}.opacity-0{opacity:0}.mix-blend-multiply{mix-blend-mode:multiply}.\\!transition-none{transition-property:none!important}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-opacity{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-500{transition-duration:.5s}:root{--margin:20px}*{font-family:Instrument Sans,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-variation-settings:"wdth" 100;font-weight:400}.DM-Mono,.DM-Mono *{font-family:DM Mono,monospace!important;font-style:normal;font-weight:300}[data-css-preset] .container_width{width:100%!important}main#mainHome{height:100vh;margin:0!important;overflow-y:scroll;padding:0!important;scroll-snap-type:y mandatory;top:0}#head{display:flex;font-size:6vw;height:1em;justify-content:space-between;padding:20px;position:fixed;transition:.6s ease;width:100%;z-index:10}#head p{display:flex;margin:0}#head p.arch{margin-left:auto}#head p.arch.invisible{display:none}#head a.first{opacity:1;transition:.6s ease-in-out,color 0s;width:100%}#head a.first.invisible{font-size:16px;width:.3em}#head a.main{transition:.6s ease-in-out,color 0s}#head a.main:after{content:".";display:inline-block;opacity:0;transition:opacity .6s ease;width:0}#head a.main.show-dot:after{opacity:1}#head a.main.small{font-size:16px}#head .blankSpace{width:.4em}#head .blankSpace.invisible{width:0}#head #spansRow{display:flex;flex-direction:row;gap:0;grid-template-columns:repeat(4,1fr);justify-content:flex-end;text-align:right;transition:.6s ease;width:0}#head #spansRow.visible{gap:12vw;width:70vw}#head a.menu{font-size:16px;height:0;opacity:0;pointer-events:none;width:0}#head a.menu.visible{height:auto;opacity:1;pointer-events:all;position:relative;width:auto}section{background-color:#723137;height:100vh;position:relative;scroll-snap-align:start}section#s_2{background-color:#fff;display:flex;height:100%;overflow-y:hidden;overflow-y:scroll;scroll-snap-type:x mandatory}section#s_2 img{display:inline-block;height:100vh;margin:0;scroll-snap-align:start;width:auto}section#s_3{background-color:#fff}section#s_3 p{color:#000;font-family:DM Mono,monospace!important;font-size:14px;font-style:normal;font-weight:300;left:23vw;margin:0;position:absolute;top:50%;width:30vw}section#s_4{background-color:#fff;display:grid;gap:6px;grid-auto-rows:5vh;grid-template-columns:repeat(24,1fr);overflow-y:scroll;padding:100px 20px 10vh}section#s_4 .imagesGroup{position:relative;width:130vw}section#s_4 .image.img_1{position:absolute;width:40vw}section#s_4 .image.img_2{margin-left:7vw;margin-top:40vw;position:absolute;width:26vw}section#s_4 .image.img_3{margin-left:50vw;margin-top:20vw;position:absolute;width:40vw}section#s_4 .image.img_4{margin-left:96vw;margin-right:20vw;margin-top:0;position:absolute;width:26vw}section#s_4 .image img{width:100%}section#s_4 .image p{color:#fff;font-size:16px;left:10%;opacity:0;position:absolute;top:10%;transition:.6s ease}section#s_4 .image p:before{background-color:#fff;border-radius:100vw;content:"";display:inline-block;height:.6em;left:calc(50% - .3em);position:absolute;top:-1em;width:.6em}section#s_4 .image:hover p{opacity:1}section#s_4 .projectName{color:#fff;display:flex;flex-direction:column;gap:.4em;text-align:center}section#s_4 .projectName .circle{background-color:#fff;border-radius:100%;display:inline-block;height:1em;margin-left:auto;margin-right:auto;width:1em}#head .notVisible{font-size:16px;opacity:0!important;width:.3em!important}#head.s4{pointer-events:none}#head.s4 .first{opacity:0!important;pointer-events:none!important;transition:0s!important}#head.s4 a.main:after{opacity:1!important}a.hasArrow:before{content:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' data-name='Livello 1' viewBox='0 0 128 128'%3E%3Cpath d='M12.23.4.28 12.33l98.44 98.66-97.27.21 16.63 16.4 108.94-.24.7-108.93-16.63-16.39-.43 97z' style='fill:%23fff;stroke-width:0'/%3E%3C/svg%3E");display:inline-block;height:.6em;left:-1em;position:absolute;width:.6em}#head a.hasArrow.text-black:before{content:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' data-name='Livello 1' viewBox='0 0 128 128'%3E%3Cpath d='M12.23.4.28 12.33l98.44 98.66-97.27.21 16.63 16.4 108.94-.24.7-108.93-16.63-16.39-.43 97z' style='fill:%23000;stroke-width:0'/%3E%3C/svg%3E")}.place-content-start{place-content:start}.place-content-end{place-content:end}.place-content-center{place-content:center}.place-content-justify{place-content:space-between}.pic figure.image-width-15{width:15%}.pic figure.image-width-20{width:20%}.pic figure.image-width-25{width:25%}.pic figure.image-width-30{width:30%}.pic figure.image-width-35{width:35%}.pic figure.image-width-40{width:40%}.pic figure.image-width-45{width:45%}.pic figure.image-width-50{width:50%}.pic figure.image-width-55{width:55%}.pic figure.image-width-60{width:60%}.pic figure.image-width-65{width:65%}.fixed-height-60{padding-top:40vh}.fixed-height-70{padding-top:30vh}.fixed-height-80{padding-top:20vh}.fixed-height-max{padding-top:0}.fixed-height-60>figure,.fixed-height-70>figure,.fixed-height-80>figure,.fixed-height-max>figure{height:100%}.pic img{max-height:100%;width:100%}.mg-left-0{margin-left:-20px}.mg-left-20{margin-left:0}.mg-left-40{margin-left:20px}.mg-left-max{margin-left:auto}.mg-right-0{margin-right:-20px}.mg-right-20{margin-right:0}.mg-right-40{margin-right:20px}.mg-right-max{margin-right:auto}.mg-top-no{height:100vh}.mg-top-0{display:flex;justify-content:center;max-height:85vh;overflow:hidden}.mg-top-max{margin-top:auto}.mg-bottom-no{margin-bottom:-20px}.mg-bottom-0{margin-bottom:0}.mg-bottom-max{margin-bottom:auto}.mg-top-max.mg-bottom-max{align-content:center}.mg-top-no img{height:100%;width:100%}.fade-enter-active,.fade-leave-active{transition:opacity .6s ease-in-out}.fade-enter,.fade-leave-to{opacity:0}.cursor-follower{transform:translate(-50%,-50%);transition:transform .1s ease}.projectIndexArrow{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' data-name='Livello 1' viewBox='0 0 128 128'%3E%3Cpath d='m.4 115.77 11.93 11.95 98.66-98.44.21 97.27 16.4-16.63L127.36.98 18.43.28 2.04 16.91l97 .43z' style='fill:%23fff;stroke-width:0'/%3E%3C/svg%3E");height:.8em;margin-left:auto;margin-right:6px;width:.8em}.\\*\\:mb-4>*{margin-bottom:1rem}.hover\\:bg-darkgreyHover:hover{--tw-bg-opacity:1;background-color:rgb(55 55 55/var(--tw-bg-opacity))}.group:hover .group-hover\\:opacity-100{opacity:1}`;

const entryStyles_DvnOdvjb = [main];

export { entryStyles_DvnOdvjb as default };
//# sourceMappingURL=entry-styles.DvnOdvjb.mjs.map
