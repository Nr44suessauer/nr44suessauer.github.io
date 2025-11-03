---
title: T-Knit
description: Automated knitting machine for hats and more. It seems no one is cranking automatically.
---

<div style="display: flex; align-items: center; gap: 16px; margin-top: 32px;">
    <div style="flex: 1; padding-right: 20px;">
        <p>
            <h1>T-Knit</h1>
            This project is about automating an existing knitting machine, which is typically used for children. The machine comes in several sizes, featuring 22, 40, or 48 needles. By motorizing its operation, the goal is to transform manual cranking into a fully automated process.<br><br>
            The T-Knit project focuses on automating the operation of a <a href="https://de.aliexpress.com/item/1005007342180493.html?spm=a2g0o.order_list.order_list_main.265.5b7c1802eW2ePi&gatewayAdapt=glo2deu" target="_blank" rel="noopener noreferrer">knitting machine</a>. By designing and constructing this machine, it becomes interesting for step-by-step automation. The idea originated when I noticed that nobody had installed a permanent motor on the device; instead, most people only use a <a href="https://de.aliexpress.com/item/1005005033745984.html?spm=a2g0o.detail.pcDetailBottomMoreOtherSeller.13.76171Zx51Zx5wN&gps-id=pcDetailBottomMoreOtherSeller&scm=1007.40050.354490.0&scm_id=1007.40050.354490.0&scm-url=1007.40050.354490.0&pvid=4aa993e6-3479-420a-9145-e59bdf75cb46&_t=gps-id:pcDetailBottomMoreOtherSeller,scm-url:1007.40050.354490.0,pvid:4aa993e6-3479-420a-9145-e59bdf75cb46,tpp_buckets:668%232846%238111%231996&pdp_ext_f=%7B%22order%22%3A%22270%22%2C%22eval%22%3A%221%22%2C%22sceneId%22%3A%2230050%22%2C%22fromPage%22%3A%22recommend%22%7D&utparam-url=scene%3ApcDetailBottomMoreOtherSeller%7Cquery_from%3A%7Cx_object_id%3A1005005033745984%7C_p_origin_prod%3A" target="_blank" rel="noopener noreferrer">drill attachment</a>. However, with that method, you still need to actively participate in the process. With this project, I aim to change that and make knitting fully automated.<br><br>
            The ultimate goal is for the user to only need to supply yarn and select a hat or scarf via an interface. The machine will then produce the chosen item completely autonomously, including error detection and handling as part of the process.<br><br>
            The project is structured into acts, with each act focusing on a module that contributes a specific task to the automation process.
        </p>
        <ul>
            <li>
                <a href="#act-i-motorization-of-the-knitting-unit" style="color: #f300aaff; font-weight: bold; background-color: #000000ff; padding: 2px 6px; border-radius: 4px;">
                    Act I : Motorization of the Knitting Unit
                </a>
            </li>
        </ul>     </ul>
    </div>
    <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/T-Knit/gif/Loop_View_T-Knit.gif?raw=true" alt="Loop View T-Knit" style="max-width: 32%; height: 50%;">
    </div>
    <div style="display: flex; align-items: flex-start; gap: 24px;">
        <div style="flex: 1; padding-right: 20px;">
            <p>
                This is a tutorial video showing how to knit a hat using the machine. The black machine featured in the video is essentially identical to the pink one, both are made entirely of plastic. For the purposes of this project, there is no practical difference between the two models.
            </p>
            <iframe width="100%" height="220" src="https://www.youtube.com/embed/74bfmE7i6FA" title="T-Knit Machine Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius: 8px;"></iframe>
        </div>
        <div style="flex: 1;">
            <a href="https://de.aliexpress.com/item/1005007342180493.html?spm=a2g0o.order_list.order_list_main.265.5b7c1802eW2ePi&gatewayAdapt=glo2deu" target="_blank" rel="noopener noreferrer">
                <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/T-Knit/Machine.png?raw=true" alt="T-Knit Machine" style="max-width: 100%; height: auto; cursor: pointer;">
            </a>
        </div>
    </div>

<h2>Alternative Hardware</h2>
<div style="display: flex; align-items: flex-start; margin-top: 32px;">
    <div style="flex: 1; padding-right: 20px;">
        <p>
            Here is an example of a <a href="https://www.printables.com/model/355228-circular-sock-knitting-machine-for-my-mom-and-you" target="_blank" rel="noopener noreferrer">different knitting machine setup</a>. For automation, it is generally preferable to use knitting machines where the yarn moves instead of the needles. This type of machine allows for higher operating speeds and significantly less wear compared to the version I am currently using. The reduced mechanical stress makes them more suitable for continuous, automated operation.     
        </p>
        <p>
            One major challenge I encountered was that these machines are typically designed only for sock sizes, not for hats. This means that, for my use case, I would have needed to build a larger version based on this machine to accommodate hat sizes.
        </p>
    </div>
    <div style="flex: 1;">
        <div style="display: flex; gap: 16px;">
            <a href="https://www.printables.com/model/355228-circular-sock-knitting-machine-for-my-mom-and-you" target="_blank" rel="noopener noreferrer">
                <img src="https://media.printables.com/media/prints/355228/images/3126560_d39f9aba-6833-41eb-b298-6fedfecfbd2a/thumbs/inside/1920x1440/jpg/img_20230116_100834.webp" alt="Knitting Machine Modification 1" style="max-width: 100%; height: auto; cursor: pointer;">
            </a>
        </div>
    </div>
</div>

---

## Act I: Motorization of the Knitting Unit
<img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/T-Knit/gif/Prototyp_1_T-Knit.gif?raw=true" alt="T-Knit Motorized Prototype — first prototype with stand" style="max-width: 50%; border-radius: 8px; margin-bottom: 16px;">

*First prototype*


---


<div style="height: 300px;"></div>

<div style="margin-top: 32px; text-align: center;">
    <a href="https://media1.tenor.com/m/fTC3vQTQbHoAAAAC/back-to-the-future-to-be-continued.gif" target="_blank" rel="noopener noreferrer">
        <img src="https://media1.tenor.com/m/fTC3vQTQbHoAAAAC/back-to-the-future-to-be-continued.gif" alt="Back to the Future — To be continued" style="max-width: 20%; height: auto; cursor: pointer;">
    </a>
</div>