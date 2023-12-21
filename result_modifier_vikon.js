if(document.readyState == 'loading'){
   let vikonHeader = document.querySelector(".single-info-text"), stylesheetLink = vikonHeader.querySelectorAll("link");
   for(i = 0; i < stylesheetLink.length; i++){
      if(stylesheetLink[i].getAttribute("href").includes("/sveden/assets/")){
         stylesheetLink[i].parentNode.removeChild(stylesheetLink[i]);
      }
   }
   let brElems = document.querySelectorAll("br");   
   for(i = 0; i < brElems.length; i++){
      brElems[i].parentNode.removeChild(brElems[i]);
   }
}
document.addEventListener("DOMContentLoaded",()=>{
   let currentElemContent, containerHeight = 0, className;
   function changeSignaturePopup(){
      var mutationObserver = new MutationObserver(function(){
         let popupArr = document.querySelectorAll(".tooltip-inner"), top;
         if(popupArr.length != 0){
            let popup = popupArr[popupArr.length-1];
            let popupContent, splitContent, newSplit;
            popupContent = popup.innerHTML.split("<br>");
            popup.innerHTML = "";
            for(i = 0; i < popupContent.length; i++){
               splitContent = popupContent[i].split(":", 1);
                  if(i == 0){
                     newSplit = "<b>" + splitContent[0] + ": </b><br>";
                  }
                  else{               
                     newSplit = "<br><b>" + splitContent[0] + ": </b><br>";
                  }
               splitContent[0] += ":";
               popupContent[i] = popupContent[i].replace(splitContent[0], newSplit);
               popup.innerHTML += popupContent[i];
            }
            top = parseInt(popup.parentNode.style.top);
            popup.parentNode.style.cssText = "top:" + top + "px; left: 25%; display:block";
         }
      });
      mutationObserver.observe(document.documentElement, {
         characterData: true,
         childList: true,
      });
   }
   function setClassName(){
      className = window.location.pathname;
      if(window.location.pathname.includes("/sveden/education/")){
         className = className.replace("/sveden/education/", "");
         className = className.replace("/", "");
      }
      else{
         className = className.replace("/sveden/", "");
         className = className.replace("/", "");
      }
      return className;
   }
   function addToggle(){
      if(window.location.pathname.includes("abitur")){
         className = "block-image";
         elemTitle = document.querySelectorAll("." + className + "-title");
      }
      else if(window.location.pathname.includes("employees")){
         className = "employee-block-title";
         elemTitle = document.querySelectorAll("." + className);
      }
      else if(window.location.pathname == "/sveden/grants/"){
         className = "grants-list-block-title";
         elemTitle = document.querySelectorAll("." + className);
      }
      else if(window.location.pathname == "/sveden/ovz/"){
         className = "ovz-list-item-title";
         elemTitle = document.querySelectorAll("." + className);
      }
      else if(window.location.pathname == "/sveden/education/poa/"){
         className = "poa-list-item-title";
         elemTitle = document.querySelectorAll("." + className);
      }
      else if(window.location.pathname == "/sveden/education/eduprof/"){
         className = "eduprof-list-item-title";
         elemTitle = document.querySelectorAll("." + className);
      }
      else if(window.location.pathname == "/sveden/education/eduaccred/"){
         className = "eduaccred-list-item-title";
         elemTitle = document.querySelectorAll("." + className);
      }
      else if(window.location.pathname == "/sveden/education/eduop/"){
         className = "eduop-list-item-title";
         elemTitle = document.querySelectorAll("." + className);
      }
      else if(window.location.pathname == "/sveden/education/perevod/"){
         className = "perevod-list-item-title";
         elemTitle = document.querySelectorAll("." + className);
      }
      else if(window.location.pathname == "/sveden/vacant/"){
         className = "vacant-item-title";
         elemTitle = document.querySelectorAll("." + className);
      }
      else if(window.location.pathname == "/sveden/education/study/"){
         className = "study-item-title";
         elemTitle = document.querySelectorAll("." + className);
      }
      else{
         className = setClassName();
         elemTitle = document.querySelectorAll("." + className + "-list-item-title");
      }
      let elemClass = elemTitle[0].classList[0];
      let from = elemClass.search("-title");
      elemClass = elemClass.substring(0, from);
      from = elemClass.search("-image");
      if(from != -1){
         elemClass = elemClass.substring(0, from);
      }
      blockItemToggle = document.createElement("div");
      blockItemToggle.classList.add(elemClass+"-item-toggle");
      blockItemToggle.innerHTML = '<svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="23" fill="none" stroke="#fff" stroke-width="4"></circle> <path d="M33 20L25 30L17 20" stroke="#fff" stroke-width="4"></path></svg>';
      for(i = 0; i < elemTitle.length; i++){
         elemTitle[i].innerHTML += blockItemToggle.outerHTML;
      }
      if(window.location.pathname == "/sveden/eduStandarts/"){
         className = "eduStandarts";
         elemTitle = document.querySelectorAll("." + className + "-title");
         blockItemToggle = document.createElement("div");
         blockItemToggle.classList.add(elemClass+"-toggle");
         blockItemToggle.innerHTML = '<svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="23" fill="none" stroke="#fff" stroke-width="4"></circle> <path d="M33 20L25 30L17 20" stroke="#fff" stroke-width="4"></path></svg>';
         for(i = 0; i < elemTitle.length; i++){
            elemTitle[i].innerHTML += blockItemToggle.outerHTML;
         }
      }
   }
   function setColor(color, elemTitle, elemColor, blockItemToggle = []){
      if(color == "rgb(255, 255, 255)"){
         if(elemColor.includes("rgb(149, 193, 31)")){
            setTimeout(() => {elemTitle.style.cssText = "background: #95c11f; border-color: #95c11f; color: #fff";blockItemToggle[0].setAttribute("stroke", "#fff");blockItemToggle[1].setAttribute("stroke", "#fff")}, 1000);
            elemColor = null;
         }
         else{
            setTimeout(() => {elemTitle.style.cssText = "background: #009fe3; color: #fff; border-color: #009fe3"; blockItemToggle[0].setAttribute("stroke", "#fff"); blockItemToggle[1].setAttribute("stroke", "#fff")}, 1000);
            elemColor = null;
         }
      }
      else{
         if(elemColor.includes("background: rgb(149, 193, 31)")){color = "rgb(149, 193, 31)";}
         else{color = "rgb(0, 159, 227)";}
         if(!elemColor.includes("background: rgb(255, 255, 255)")){
            if(color == "rgb(149, 193, 31)"){
               setTimeout(() => {elemTitle.style.cssText = "background: #fff; border-color: #95c11f; color: #000"; blockItemToggle[0].setAttribute("stroke", "#95c11f"); blockItemToggle[1].setAttribute("stroke", "#95c11f")}, 0);
            }
            else{
               setTimeout(() => {elemTitle.style.cssText = "background: #fff; border-color: #009fe3; color: #000;"; blockItemToggle[0].setAttribute("stroke", "#009fe3");blockItemToggle[1].setAttribute("stroke", "#009fe3")}, 0);
            }
            elemColor = null;
         }
      }
   }
   function convertToDropdown(){
      let td;
      if(window.location.pathname != "/sveden/vacant/" && window.location.pathname != "/sveden/inter/"){
         td = document.querySelectorAll("td");
         let itemprop, tableHead = document.querySelectorAll("thead");
         for(i = 0; i < tableHead.length; i++){
            if(tableHead[i].parentNode.parentNode.parentNode.parentNode.children[0].getAttribute("id") != "anchor_hostelInfo" && tableHead[i].parentNode.parentNode.parentNode.parentNode.children[0].getAttribute("id") != "anchor_volume"){
               tableHead[i].parentNode.removeChild(tableHead[i]);
            }
         }
         for(i = 0; i < td.length; i++){
            if(!td[i].innerHTML.includes("table")){
               if(td[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].getAttribute("id") != "anchor_hostelInfo" && td[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].getAttribute("id") != "anchor_volume"){
                  check = 0;
                  if(td[i].parentNode.parentNode.parentNode.hasAttribute("class")){
                     if(td[i].hasAttribute("itemprop")){
                        itemprop = td[i].getAttribute("itemprop");
                        if(td[i].classList.contains("hide")){
                           td[i].outerHTML = '<div class="hide" itemprop=' + itemprop + ">" + td[i].innerHTML + "</div>";
                        }
                        else{
                             td[i].outerHTML = "<div itemprop=" + itemprop + ">" + td[i].innerHTML + "</div>";
                        }
                     }
                     else{
                        if(td[i].classList.contains("hide")){
                           td[i].outerHTML = '<div class="hide">' + td[i].innerHTML + "</div>";
                        }
                        else{
                              td[i].outerHTML = "<div>" + td[i].innerHTML + "</div>";
                        }
                     }
                  }
                  else{
                     continue;
                  }
               }
               else{
                  if(td[i].children.length > 1){
                     elem = document.createElement("br");
                     td[i].insertBefore(elem, td[i].children[1]);
                  }
                  if(td[i].innerHTML.includes("всего")){
                     td[i].innerHTML = td[i].innerHTML.replace("всего", "<br>всего<br>");
                  }
               }
            }

         }
      }
      tr = document.querySelectorAll("tr");
      className = setClassName();
      for(i = 0; i < tr.length; i++){
         if(!tr[i].innerHTML.includes("table")){
            if(tr[i].parentNode.parentNode.parentNode.parentNode.parentNode.children[0].getAttribute("id") != "anchor_hostelInfo" && tr[i].parentNode.parentNode.parentNode.parentNode.parentNode.children[0].getAttribute("id") != "anchor_volume"){
               if(tr[i].parentNode.parentNode.hasAttribute("class")){
                  if(tr[i].hasAttribute("itemprop")){
                     if(tr[i].classList.contains("hide")){
                        tr[i].outerHTML = '<div class="' + className + '-list-item hide" itemprop="' + tr[i].getAttribute("itemprop") + '">' + tr[i].innerHTML + '</div>';
                     }
                     else{
                        tr[i].outerHTML = '<div class="' + className + '-list-item" itemprop="' + tr[i].getAttribute("itemprop") + '">' + tr[i].innerHTML + '</div>';
                     }   
                  }
                  else{
                        if(tr[i].classList.contains("hide")){
                           tr[i].outerHTML = '<div class="' + className + '-list-item ' + className + '-list-section-title hide">' + tr[i].innerHTML + '</div>';
                        }
                        else{
                        if(tr[i].hasAttribute("style") && tr[i].style.cssText.includes("display: none")){
                           tr[i].outerHTML = '<div style="display: none" class="' + className + '-list-item ' + className + '-list-section-title">' + tr[i].innerHTML + '</div>';
                        }
                        else{
                           tr[i].outerHTML = '<div class="' + className + '-list-item ' + className + '-list-section-title">' + tr[i].innerHTML + '</div>';
                        }
                    }
                  }
               }
               else{
                  continue;
               }
            }
         }

      }
      table = document.querySelectorAll("table");
      for(i = 0; i < table.length; i++){
         if(table[i].parentNode.parentNode.parentNode.children[0].getAttribute("id") != "anchor_hostelInfo" && table[i].parentNode.parentNode.parentNode.children[0].getAttribute("id") != "anchor_volume"){
            if(table[i].hasAttribute("class")){
               table[i].outerHTML = '<div class="'+ className +'-list">' + table[i].innerHTML + '</div>';
            }
            else{
               continue;
            }
         }
         else{   
            continue;
         }
      }
      firstChild = document.querySelectorAll("."+ className +"-list-item");
      for(i = 0; i< firstChild.length; i++){
         if(firstChild[i].children[0] != null && parseInt(firstChild[i].children[0].innerText)){
            firstChild[i].removeChild(firstChild[i].children[0]); 
         }
      }
      if(window.location.pathname == "/sveden/eduStandarts/"){
         let title = document.querySelectorAll("."+ className +"-list-item");
         for(i=0; i<title.length; i++){
            title[i].children[0].classList.add(""+ className +"-list-item-title");
         }
      }
      structListItemArr = document.querySelectorAll("."+ className +"-list-item");
      if(window.location.pathname == "/sveden/employees/"){
         let elem;
         elem = document.querySelectorAll(".employees-list");
         for(i=0; i<elem.length; i++){
            if(elem[i].parentNode.parentNode.children[0].innerHTML.includes("совет")){
               elem = elem[i].parentNode.parentNode;
               break;
            }
         }
         let blockTitle, blockTitleText;
         blockTitle = document.createElement("div");
         blockTitle.classList.add("employee-block-title");
         elem.insertBefore(blockTitle, elem.children[0]);
         elem.children[1].innerHTML = "Ученый совет";
         blockTitleText = elem.children[1];
         elem.children[2].classList.add("uchSovet-items");
         blockTitle = elem.querySelector(".employee-block-title");
         blockTitle.insertBefore(blockTitleText, blockTitle.children[0]);
         elem = document.querySelector("#anchor_teachingStaff").parentElement;
         blockTitle = document.createElement("div");
         blockTitle.classList.add("employee-block-title");
         blockTitleText = elem.querySelector("#anchor_teachingStaff");
         blockTitleText.innerHTML = "Персоналный состав педагогических работников каждой реализуемой образовательной программы";
         elem.insertBefore(blockTitle, elem.children[0]);
         blockTitle.insertBefore(blockTitleText, blockTitle.children[0]);
         elem.children[1].classList.add("teaching-staff-content");
         elem.children[1].insertBefore(elem.children[3], elem.children[1].children[1]);
         elem.children[1].insertBefore(elem.children[2], elem.children[1].children[2]);
         elem = document.querySelectorAll(".employees-list");
         for(i=0; i<elem.length; i++){
            if(elem[i].parentNode.parentNode.children[0].innerHTML.includes("Научные работники")){
               elem = elem[i].parentNode.parentNode;
               break;
            }
         }
         blockTitle = document.createElement("div");
         blockTitle.classList.add("employee-block-title");
         elem.insertBefore(blockTitle, elem.children[0]);
         elem.children[1].innerHTML = "Научные работники";
         blockTitleText = elem.children[1];
         elem.children[2].classList.add("uchSovet-items");
         blockTitle = elem.querySelector(".employee-block-title");
         blockTitle.insertBefore(blockTitleText, blockTitle.children[0]);
         elem = document.querySelectorAll(".employees-list");
         for(i=0; i<elem.length; i++){
            if(elem[i].parentNode.parentNode.children[0].innerHTML.includes("Информация о прочих сотрудниках организации")){
               elem = elem[i].parentNode.parentNode;
               break;
            }
         }
         blockTitle = document.createElement("div");
         blockTitle.classList.add("employee-block-title");
         elem.insertBefore(blockTitle, elem.children[0]);
         elem.children[1].innerHTML = "Прочие сотрудники организации";
         blockTitleText = elem.children[1];
         elem.children[2].classList.add("uchSovet-items");
         blockTitle = elem.querySelector(".employee-block-title");
         blockTitle.insertBefore(blockTitleText, blockTitle.children[0]);
      }
      for(i=0; i<structListItemArr.length; i++){
         structListContainer = document.createElement("div");
         structListContainer.classList.add(""+ className +"-list-item-container");
         structListItemArr[i].insertBefore(structListContainer, structListItemArr[i].children[1]);
      }
      structListItemArr = document.querySelectorAll("."+ className +"-list-item");
      for(i=0; i < structListItemArr.length; i++){
         for(j=2; j<structListItemArr[i].childElementCount; j++){
            structListItemArr[i].children[1].innerHTML += structListItemArr[i].children[j].outerHTML;
         }
         let childrenCount = structListItemArr[i].childElementCount - 1;
         for(j = childrenCount; j >= 1; j--){
            if(!structListItemArr[i].children[j].classList.contains(""+ className +"-list-item-container")){
               structListItemArr[i].removeChild(structListItemArr[i].children[j]);
            }
         }  
      }
      if(window.location.pathname == "/sveden/budget/"){
         elem = document.querySelectorAll(".budget-list");
         container = document.createElement("div");
         for(i=0; i<elem[0].childElementCount; i++){
            if(elem[0].children[i].hasAttribute("class")){
               container.insertBefore(elem[0].children[i], container.children[container.childElementCount]);
               i--;
            }
         }
         elem[0].insertBefore(container, elem[0].children[elem[0].childElementCount]);
      }
   }
   function checkIndentation(currentElemContent){
      let parentElem = currentElemContent.parentNode, indentation = 0;
      if(parseInt(window.getComputedStyle(parentElem).getPropertyValue("padding-left")) != 0){
         indentation += parseInt(window.getComputedStyle(parentElem).getPropertyValue("padding-left"));
      }
      if(parseInt(window.getComputedStyle(parentElem).getPropertyValue("padding-right")) != 0){
         indentation += parseInt(window.getComputedStyle(parentElem).getPropertyValue("padding-right"));
      }
      if(parseInt(window.getComputedStyle(parentElem).getPropertyValue("padding-top")) != 0){
         indentation += parseInt(window.getComputedStyle(parentElem).getPropertyValue("padding-top"));
      }
      if(parseInt(window.getComputedStyle(parentElem).getPropertyValue("padding-bottom")) != 0){
         indentation += parseInt(window.getComputedStyle(parentElem).getPropertyValue("padding-bottom"));
      } 
      if(parseInt(window.getComputedStyle(parentElem).getPropertyValue("margin-left")) != 0){
         indentation += parseInt(window.getComputedStyle(parentElem).getPropertyValue("margin-left"));
      }
      if(parseInt(window.getComputedStyle(parentElem).getPropertyValue("margin-right")) != 0){
         indentation += parseInt(window.getComputedStyle(parentElem).getPropertyValue("margin-right"));
      }
      if(parseInt(window.getComputedStyle(parentElem).getPropertyValue("margin-top")) != 0){
         indentation += parseInt(window.getComputedStyle(parentElem).getPropertyValue("margin-top"));
      }
      if(parseInt(window.getComputedStyle(parentElem).getPropertyValue("margin-bottom")) != 0){
         indentation += parseInt(window.getComputedStyle(parentElem).getPropertyValue("margin-bottom"));
      } 
      if(parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("padding-left")) != 0){
         indentation += parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("padding-left"));
      }
      if(parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("padding-right")) != 0){
         indentation += parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("padding-right"));
      }
      if(parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("padding-top")) != 0){
         indentation += parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("padding-top"));
      }
      if(parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("padding-bottom")) != 0){
         indentation += parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("padding-bottom"));
      } 
      if(parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("margin-left")) != 0){
         indentation += parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("margin-left"));
      }
      if(parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("margin-right")) != 0){
         indentation += parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("margin-right"));
      }
      if(parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("margin-top")) != 0){
         indentation += parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("margin-top"));
      }
      if(parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("margin-bottom")) != 0){
         indentation += parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("margin-bottom"));
      } 
      return indentation;
   }
   if(window.location.pathname == "/abitur/"){
      setTimeout(()=>{
         document.querySelector(".vikon-section").setAttribute("style", "opacity:1");
      }, 20);
         let linksContainer, links, table, figures, i = 0, elem, figureElem, length, list, paragraphes, figure;
         table = document.querySelector("table");
         table.outerHTML = '<div class="abitur-info">' + table.innerHTML + '</div>';
         links = document.querySelector(".abitur-welcome").querySelector("h3");
         links.outerHTML = '<div class="abitur-buttons-container">' + links.innerHTML + '</div>';
         linksContainer = document.querySelector(".abitur-info");
         links = linksContainer.querySelectorAll("h4");
         figures = linksContainer.querySelectorAll("figure");
         paragraphes = document.querySelector(".abitur-priem-commission").querySelectorAll("p");
         length = linksContainer.childElementCount;
         lists = document.querySelectorAll(".list-without-type");
         for(i = 0; i < lists.length; i++){
            lists[i].classList.add("abitur-company-list");
         }
         for(i = 0; i < length; i++){
            if(linksContainer.childNodes[i].tagName == "P"){
               linksContainer.removeChild(linksContainer.childNodes[i]);
               length--;
               i--;
            }
         }
         for(i = 0; i < paragraphes.length; i++){if(paragraphes[i].innerHTML == "&nbsp;"){paragraphes[i].parentNode.removeChild(paragraphes[i]);}}
         i = 0;
         for(i = 0; i < links.length; i++){if(links[i].innerHTML == "&nbsp;"){links[i].parentNode.removeChild(links[i]);}}
         links = linksContainer.querySelectorAll("h4");
         for(i = 0; i < links.length; i++){
            if(i % 8 == 0){
               elem = document.createElement("div");
               elem.classList.add("abitur-info-group");
               linksContainer.append(elem);
            }
            elem.appendChild(links[i]);
         } 
         figureElem = document.createElement("div");
         figureElem.classList.add("abitur-info-license");
         linksContainer.append(figureElem);
         figureElem = document.createElement("div");
         figureElem.classList.add("abitur-info-title");
         figureElem.innerHTML = "<h3>Документы</h3>";
         document.querySelector(".abitur-info-license").appendChild(figureElem);
         figureElem = document.createElement("div");
         figureElem.classList.add("abitur-img-container");
         document.querySelector(".abitur-info-license").appendChild(figureElem);
         for(i = 0; i < figures.length; i++){figureElem.appendChild(figures[i]); } 
         let h4Group = document.querySelector(".abitur-info-group:nth-child(3)").querySelectorAll("h4"), h4Arr = [h4Group[4], h4Group[5]];
         h4Group[4].parentNode.removeChild(h4Group[4]);
         h4Group[5].parentNode.removeChild(h4Group[5]);
         figure = document.querySelector("figure.table");
         figure.outerHTML = '<div class="abitur-content">' + figure.innerHTML + '</div>';
         figure = document.querySelectorAll("figure.image");
         let y = 0;
         for(i = 0; i < figure.length; i++){
            if(y < 2){figure[i].outerHTML = '<div class="abitur-img-elem">' + figure[i].innerHTML + h4Arr[y].innerHTML + '</div>';}
            y++;
         }
   }
   if(window.location.pathname.includes("aspirant") || 
      window.location.pathname.includes("bachelor") ||
      window.location.pathname.includes("spo_sredn")){
         setTimeout(()=>{
            document.querySelector(".vikon-section").setAttribute("style", "opacity:1");
         }, 20);
         let color = null, vikonTitleCount, vikonRowCount, vikonTitleMarginTop, links, linksCount, mt, elemColor = null, contentBlock, modalHeight, currentElem, body, modal, modalBtn, modaCloseContianer, checkPaste, elemTitle, items = document.querySelectorAll(".block-item-link"),  blockItemToggleElems = [], blocksTitle = document.querySelectorAll(".block-image-title"), counter = 0, documetLinks, documentImg, pasteElem;
         for(i = 0; i < items.length; i++){
            items[i].removeAttribute("data-href");
         }  
         for(i = 0; i < blocksTitle.length; i++){
            if(counter % 2 == 0){blocksTitle[i].style.cssText = "background: #95c11f; border-color: #95c11f";}counter++;
         }
         let row = document.querySelector(".vikon-row");
         let vikonRowMt = checkIndentation(row);
         addToggle();
         function removeModal(){
            body = document.querySelector(".vikon-wrapper");
            modal = document.querySelector(".abitur-modal");
            modalBtn = document.querySelector(".button-return-container");
            modaCloseContianer = document.querySelector(".button-close-container");
            if(modalBtn != null){body.removeChild(modalBtn);}
            if(modaCloseContianer != null){ body.removeChild(modaCloseContianer);}
            if(modal != null){body.removeChild(modal);}
         }
         documentImg = document.createElement("i");
         documentImg.classList.add("document-img");
         documetLinks = document.querySelectorAll(".word-break-all");
         for(i = 0; i < documetLinks.length; i++){
            documetLinks[i].innerHTML = documentImg.outerHTML + documetLinks[i].innerHTML;
         }
         document.addEventListener("click", function(e){
            checkPaste = 0;
            if(e.target.classList.contains("block-image-title")){currentElem = e.target.parentNode;}
            else if(e.target.tagName == "path" || e.target.tagName == "circle"){currentElem = e.target.parentNode.parentNode.parentNode.parentNode;}
            else if(e.target.tagName == "svg"){currentElem = e.target.parentNode.parentNode.parentNode;}
            else{currentElem = null;}       
            if(currentElem != null){
               if(currentElem.classList.contains("block-item-link")){
                  modal = document.querySelector('#'+ currentElem.getAttribute("data-block-hash"));
                  if(currentElem.children[0].getAttribute("style") != null){elemColor = currentElem.children[0].getAttribute("style");}
                  else{ elemColor = window.getComputedStyle(currentElem.children[0]).getPropertyValue("border-color");}    
                  vikonTitleCount = modal.querySelectorAll(".vikon-title-block").length;
                  vikonRowCount = modal.querySelectorAll(".vikon-title-block").length;
                  linksCount = modal.querySelectorAll(".word-break-all").length;
                  vikonTitleMarginTop = checkIndentation(modal.querySelector(".vikon-title-block", null));
                  vikonTitleMarginTop = parseInt(vikonTitleMarginTop) * 2;
                  if(linksCount > 1){
                     links = modal.querySelectorAll(".word-break-all");
                     for(link of links){ 
                        mt += checkIndentation(link);
                     }
                  }
                  for(i = 0; i < currentElem.childElementCount; i++){
                     if(currentElem.children[i].classList.contains("block-item-content")){checkPaste ++;}
                  }
                  contentBlock = document.createElement("div");
                  contentBlock.classList.add("block-item-content");
                  if(checkPaste == 0){
                     if(modal != null){
                        pasteElem = currentElem.insertBefore(contentBlock, currentElem.children[2]);
                        contentBlock.innerHTML = modal.innerHTML;
                     }
                     removeModal();
                  }
                  else{           
                     if(document.querySelector(".abitur-modal-content").parentNode != null &&
                        !(document.querySelector(".abitur-modal-content").parentNode.classList.contains("block-item-content"))){removeModal(); }
                  }
                  contentBlock = currentElem.querySelector(".block-item-content");
                  blockItemToggleElems[1] = contentBlock.parentNode.children[0].children[0].children[0].children[1];
                  blockItemToggleElems[0] = contentBlock.parentNode.children[0].children[0].children[0].children[0];
                  if(currentElem.innerHTML != currentElemContent){
                     currentElemContent = currentElem.innerHTML;
                     elemTitle = contentBlock.parentNode.children[0];
                     containerHeight = contentBlock.style.maxHeight;
                     modalHeight = 0;
                     for(i = 0; i < contentBlock.childElementCount; i++){modalHeight += contentBlock.children[i].offsetHeight;}
                     if(parseInt(containerHeight) != 0 && containerHeight != ""){
                        contentBlock.removeAttribute("style");
                        contentBlock.setAttribute("area-expanded", "false");
                        containerHeight = 0;
                        color = "rgb(255, 255, 255)";
                        setTimeout(blockItemToggleElems[1].setAttribute("d", "M33 20L25 30L17 20"), 1000);
                        setColor(color, elemTitle, elemColor, blockItemToggleElems);
                        color = null;
                     }
                     else{
                        mt = vikonTitleCount * vikonTitleMarginTop;
                        mt += vikonRowCount * vikonRowMt;
                        modalHeight += mt;
                        contentBlock.style.maxHeight = modalHeight + "px";
                        contentBlock.setAttribute("area-expanded", "true");
                        containerHeight = contentBlock.style.maxHeight;
                        blockItemToggleElems[1].setAttribute("d", "M33 29L25 21L17 29");  
                        setColor(color, elemTitle, elemColor, blockItemToggleElems);
                     }
                  }
                  else{
                     currentElemContent = "";
                     elemTitle = contentBlock.parentNode.children[0];
                     modalHeight = contentBlock.children[0].offsetHeight;
                     if(parseInt(containerHeight) != 0){
                        contentBlock.removeAttribute("style");
                        containerHeight = 0;
                        contentBlock.setAttribute("area-expanded", "false");
                        color = "rgb(255, 255, 255)";  
                        setTimeout(blockItemToggleElems[1].setAttribute("d", "M33 20L25 30L17 20"), 1000);
                        setColor(color, elemTitle, elemColor, blockItemToggleElems);
                        color = null;
                     }
                     else{
                        mt = vikonTitleCount * vikonTitleMarginTop;
                        mt += vikonRowCount * vikonRowMt;
                        modalHeight += mt;
                        contentBlock.style.maxHeight = modalHeight + "px";
                        contentBlock.setAttribute("area-expanded", "true");
                        containerHeight = contentBlock.style.maxHeight;
                        blockItemToggleElems[1].setAttribute("d", "M33 29L25 21L17 29");
                        setColor(color, elemTitle, elemColor, blockItemToggleElems);
                     }
                  } 
               }
               removeModal();
            }
            else{removeModal();}
         });
         document.removeEventListener("click", ()=>{});
   }
   if(window.location.pathname.includes("sveden")){
      setTimeout(()=>{
         document.querySelector(".vikon-section").setAttribute("style", "opacity:1");
      }, 20);
      let navList = document.querySelector("#nav-menu-list");
      let navItem = navList.querySelectorAll("li");
      for(i = 0; i < navItem.length; i++){
         navItem[i].classList.add("nav-menu-item");
      }
      navList.removeChild(navList.children[0]);
      navList.children[0].classList.add("first");
      let navLinks = navList.querySelectorAll('a');
      let title = document.querySelector(".single-info .container h1");
      let filesLink = document.querySelectorAll(".word-break-all");
      for(i = 0; i < navLinks.length; i++){
         navLinks[i].classList.add("nav-link");
      }
      for(i = 0; i < navLinks.length; i++){ 
         console.log(navLinks[i].innerText.indexOf("ё"));
         if(navLinks[i].innerText.indexOf("ё") != -1){
            navLinks[i].innerText = navLinks[i].innerText.replace("ё", "е");
         }
         if(navLinks[i].innerText == title.innerText){
            navLinks[i].classList.add("active");
            break;
         }
      }
      let mobNav, mobNavItem, mobNavContainer, mobNavToggle, currentElemText, currentElemList;
      mobNav = document.createElement('div');
      mobNav.classList.add("mobile-nav");
      mobNavContainer = document.createElement('div');
      mobNavContainer.classList.add("mobile-nav-container");
      currentElem = document.createElement("div");
      currentElem.classList.add("mobail-nav-item-active");
      currentElemText = document.createElement("div");
      currentElemText.classList.add("mobail-nav-item-active-text");
      currentElemList = document.createElement("div");
      currentElemList.classList.add("mob-nav-item-list");
      currentElemList.insertBefore(mobNavContainer, currentElemList.children[0]);
      mobNavToggle = document.createElement("svg");
      currentElem.insertBefore(currentElemText, currentElem.children[0]);
      for(i=0; i<navItem.length; i++){
         mobNavItem = document.createElement("div");
         mobNavItem.classList.add("mobail-nav-item");
         mobNavItem.innerHTML = navItem[i].innerHTML;
         if(!navItem[i].innerHTML.includes("Главная")){
            mobNavContainer.insertBefore(mobNavItem, mobNavContainer.children[i]);
         }
         if(navItem[i].classList.contains("active")){
            currentElemText.innerHTML = mobNavItem.innerText;
         }
      }
      currentElem.insertBefore(mobNavToggle, currentElem.children[currentElem.childElementCount]);
      mobNavToggle.innerHTML = '<path d="M33 20L25 30L17 20" stroke="#000" stroke-width="4"></path>';
      mobNavToggle.outerHTML = '<svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">' + mobNavToggle.innerHTML + '</svg>';
      mobNav.insertBefore(currentElem, mobNav.children[0]);
      mobNav.insertBefore(currentElemList, mobNav.children[mobNav.childElementCount]);
      container = document.querySelector(".container-fluid");
      container.insertBefore(mobNav, container.children[0]);
      documentImg = document.createElement("i");
      documentImg.classList.add("document-img");
      for(i = 0; i < filesLink.length; i++){
         if(filesLink[i].getAttribute("href").includes(".pdf") || filesLink[i].getAttribute("href").includes(".PDF")){
            filesLink[i].innerHTML = documentImg.outerHTML + filesLink[i].innerHTML;
         }
         if(filesLink[i].children[1]){
            filesLink[i].children[0].classList.add("icon-signature");
            filesLink[i].children[0].classList.add("tooltip-sig");
            filesLink[i].children[0].setAttribute("data-view_signature_date", filesLink[i].children[1].getAttribute("data-view_signature_date"));
            filesLink[i].children[0].setAttribute("data-signature-id", filesLink[i].children[1].getAttribute("data-signature-id"));
            filesLink[i].removeChild(filesLink[i].children[1]);
         }
      }
      title = document.querySelectorAll(".vikon-content .vikon-row h4");
      for(i = 0; i < title.length; i++){
         if(!title[i].classList.contains("vikon-title-block")){
            title[i].classList.add("vikon-title-block");
         }
      }
      if(window.location.pathname.includes("education")){
         title = document.querySelectorAll("a.nav-link");
         for(i=0; i<title.length; i++){
            if(title[i].innerHTML.includes("Образование")){
               titleElem = title[i];
               break;
            }
         }
         titleElem.classList.add("active");
      }
      mobNavContainer = document.querySelector(".mobile-nav-container");
      for(i=0; i<mobNavContainer.childElementCount; i++){
         if(mobNavContainer.children[i].children[0].classList.contains("nav-link")){
            mobNavContainer.children[i].children[0].classList.remove("nav-link");
            mobNavContainer.children[i].children[0].classList.add("mobail-nav-link");
         }
         if(mobNavContainer.children[i].children[0].classList.contains("active")){
            mobNavContainer.children[i].children[0].classList.remove("active");
            mobNavContainer.children[i].classList.add("active");
         }
      }
      changeSignaturePopup();
      document.querySelector(".vikon-section").removeAttribute("style");
      let btnBack = document.querySelector(".btn-back");
      if(btnBack != undefined){
         btnBack.parentNode.removeChild(btnBack);
      }
      document.addEventListener("click", function(e){
         if(e.target.classList.contains("mobail-nav-item-active-text") || e.target.tagName == "svg"){
            currentElem = e.target.parentNode.parentNode.children[1];
         }
         else if(e.target.classList.contains("mobail-nav-item-active")){
            currentElem = e.target.parentNode.children[1];
         }
         else if(e.target.tagName == "path"){
            currentElem = e.target.parentNode.parentNode.parentNode.children[1];
         }
         else{
            currentElem = null;
         }
         if(currentElem != null){
            currentElemToggle = currentElem.parentNode.children[0].children[1].children[0];
            if(currentElem.hasAttribute("style")){
               currentElem.removeAttribute("style");
               currentElemToggle.setAttribute("d", "M33 20L25 30L17 20");
            }
            else{
               currentElemToggle.setAttribute("d", "M33 29L25 21L17 29");
               mb = 0;
               for(i=0; i<currentElem.childElementCount; i++){
                  mb += checkIndentation(currentElem.children[i]);
                  mb += currentElem.children[i].offsetHeight;
               }
               currentElem.style.maxHeight = mb + "px";
               currentElem.setAttribute("area-expanded", "true");
            }
         }
      });
   }
   if(window.location.pathname == "/sveden/common/"){
      convertToDropdown();
      let contactsContainer = document.createElement("div");
      contactsContainer.classList.add("uchred-contacts");
      let addres = document.querySelector('div[itemprop="addressUchred"]');
      let tel = document.querySelector('div[itemprop="telUchred"]');
      let mail = document.querySelector('div[itemprop="mailUchred"]');
      let website = document.querySelector('div[itemprop="websiteUchred"]');
      website.children[0].innerHTML = website.children[0].innerHTML.replace("https://www.", "");
      website.children[0].innerHTML = website.children[0].innerHTML.replace("/", "");
      if(addres != null){
         addres.innerHTML = "<b>Адрес: </b>" + addres.innerHTML;
      }
      if(tel != null){
         tel.innerHTML = "<b>Телефон: </b>" + tel.innerHTML;
      }
      if(mail != null){
         mail.innerHTML = "<b>Электронная почта: </b>" + mail.innerHTML;
      }
      if(website != null){
         website.innerHTML = "<b>Сайт: </b>" + website.innerHTML;
      }
      let content = addres.outerHTML + tel.outerHTML + mail.outerHTML + website.outerHTML;
      contactsContainer.innerHTML = content;
      let contactsTitle = document.createElement("div");
      contactsTitle.classList.add("uchred-contacts-title");
      contactsTitle.innerText = "Контакты Учредителя:";
      contactsContainer.insertBefore(contactsTitle, contactsContainer.children[0]);
      let contactUniversity = document.querySelector("#anchor_contactVuz").parentNode.children[1];
      contactsContainer = document.createElement("div");
      contactsContainer.classList.add("vikon-university-contacts");
      content = contactUniversity.querySelectorAll("p");
      for(i = 0; i < content.length; i++){
        contactsContainer.appendChild(content[i]);
      }
      let italic = contactsContainer.querySelectorAll("i");
      for(i = 0; i < italic.length; i++){
         italic[i].outerHTML = "<b>" + italic[i].innerHTML + "</b>";
      }
      contactUniversity.insertBefore(contactsContainer, contactUniversity.children[0]);
      let filials = document.querySelector('tr[itemprop="filInfo"]');
      if(filials != null){
         for(i = 0; i < filials.childElementCount; i++){
            if(filials.children[i].innerHTML == "Отсутствует"){
               filials.style.cssText="display: none";
               filials.parentNode.children[0].innerHTML = "Отсутствует";
               break;
            }
         }
      }
      let abroad = document.querySelector('tr[itemprop="repInfo"]');
      if(abroad != null){
         for(i = 0; i < abroad.childElementCount; i++){
            if(abroad.children[i].innerHTML == "Отсутствует"){
               abroad.style.cssText="display:none";
               abroad.parentNode.children[0].innerHTML = "Отсутствует";
               break; 
            }
         }
      }
      let addressReestr = document.querySelectorAll('tr[itemprop="addressPlace"]');
      if(addressReestr != null){
         for(i = 0; i < addressReestr.length; i++){
            addressReestr[i].removeChild(addressReestr[i].children[0]);
            if(addressReestr[i].hasAttribute("itemprop")){
               addressReestr[i].outerHTML = "<div itemprop=" + addressReestr[i].getAttribute("itemprop") + ">" + addressReestr[i].innerHTML + "</div>";
            }
            else{
               addressReestr[i].outerHTML = "<div>" + addressReestr[i].innerHTML + "</div>";
            }
         }
         addressReestr = document.querySelector('div[itemprop="addressPlace"]').parentNode.parentNode;
         addressReestr.outerHTML = '<div id="list" class="address-list-container">' + addressReestr.innerHTML + '</div>';
      }
      let addressDop = document.querySelectorAll('tr[itemprop="addressPlaceDop"]');
      if(addressDop != null){
         for(i = 0; i < addressDop.length; i++){
            addressDop[i].removeChild(addressDop[i].children[0]);
            if(addressDop[i].hasAttribute("itemprop")){
               addressDop[i].outerHTML = "<div itemprop=" + addressDop[i].getAttribute("itemprop") + ">" + addressDop[i].innerHTML + "</div>";
            }
            else{
               addressDop[i].outerHTML = "<div>" + addressDop[i].innerHTML + "</div>";
            }
         }
         addressDop = document.querySelector('div[itemprop="addressPlaceDop"]').parentNode.parentNode;
         addressDop.outerHTML = '<div id="list" class="address-dop-container">' + addressDop.innerHTML + '</div>';
      }
      let baseEdu = document.querySelectorAll('tr[itemprop="addressPlaceOppo"]');
      if(baseEdu != null){
         for(i = 0; i < baseEdu.length; i++){
            baseEdu[i].removeChild(baseEdu[i].children[0]);
            if(baseEdu[i].hasAttribute("itemprop")){
               baseEdu[i].outerHTML = "<div itemprop=" + baseEdu[i].getAttribute("itemprop") + ">" + baseEdu[i].innerHTML + "</div>";
            }
            else{
               baseEdu[i].outerHTML = "<div>" + baseEdu[i].innerHTML + "</div>";
            }
         }
         baseEdu = document.querySelector('div[itemprop="addressPlaceOppo"]').parentNode.parentNode;
         baseEdu.outerHTML = '<div id="list" class="address-oppo-container">' + baseEdu.innerHTML + '</div>';
      }
      let fillInfo = document.querySelector('div[itemprop="filInfo"]');
      if(fillInfo.children[0].innerHTML.includes("Отсутствует")){
         fillInfo.children[1].style.cssText = "display: none";
         fillInfo.parentNode.innerText = "Отсутствует";
      }
      let repInfo = document.querySelector('div[itemprop="repInfo"]');
      if(repInfo.children[0].innerHTML.includes("Отсутствует")){
         repInfo.children[1].style.cssText = "display: none";
         repInfo.parentNode.innerText = "Отсутствует";
      }
   }
   if(window.location.pathname == "/sveden/struct/"){
      let name, fio, post, addressStr, email, phone, currentElemToggle;
      convertToDropdown();   
      changeSignaturePopup();
      name = document.querySelectorAll('div[itemprop="name"]');
      fio = document.querySelectorAll('div[itemprop="fio"]');
      post = document.querySelectorAll('div[itemprop="post"]');
      addressStr = document.querySelectorAll('div[itemprop="addressStr"]');
      email = document.querySelectorAll('div[itemprop="email"]');
      phone = document.querySelectorAll(".struct-list-item div:last-child");
      for(i = 0; i < name.length; i++){
         name[i].outerHTML = '<div class="struct-list-item-title">' + name[i].outerHTML + '</div>';
      }
      for(i = 0; i < fio.length; i++){
         fio[i].innerHTML = "<b>Руководитель:</b>" + fio[i].innerHTML;
      }
      for(i=0; i < post.length; i++){
         post[i].innerHTML = "<b>Должность:</b>" + post[i].innerHTML;
      }
      for(i=0; i < addressStr.length; i++){
         addressStr[i].innerHTML = "<b>Адрес:</b>" + addressStr[i].innerHTML;
      }
      for(i=0; i < email.length; i++){
         email[i].innerHTML = "<b>Электронная почта:</b>" + email[i].innerHTML;
      }
      for(i=0; i < phone.length; i++){
         if(phone[i].parentNode){
            if(phone[i].classList.contains("struct-list-item-container")){
               if(phone[i].children[phone[i].children.length-1]){
                  phone[i].children[phone[i].children.length-1].innerHTML = "<b>Телефон</b>" + phone[i].children[phone[i].children.length-1].innerHTML;
               }
            }
         }
      }
      addToggle();
      document.addEventListener("click", function(e){
         if(e.target.classList.contains("struct-list-item-title")){currentElem = e.target.parentNode;}
         else if(e.target.getAttribute("itemprop") == "name"){currentElem = e.target.parentNode.parentNode;}
         else if(e.target.tagName == "path" || e.target.tagName == "circle"){currentElem = e.target.parentNode.parentNode.parentNode.parentNode;}
         else if(e.target.tagName == "svg"){currentElem = e.target.parentNode.parentNode.parentNode;}
         else{currentElem = null;} 
         let maxHeight = 0, currentMaxHeight = 0;
         if(currentElem != null){
            currentElemContainer = currentElem.children[1];
            let mb = checkIndentation(currentElemContainer.children[0]);
            mb = mb * currentElemContainer.childElementCount;
            for(i = 0; i < currentElemContainer.childElementCount; i++){
               maxHeight += currentElemContainer.children[i].offsetHeight;
            }
            maxHeight += mb;
            currentElemToggle = currentElem.children[0].children[1].children[0].children[1];
            if(currentElemContent != currentElem.children[0].children[0].innerHTML){
               currentElemContent = currentElem.children[0].children[0].innerHTML;
               currentMaxHeight = currentElemContainer.style.maxHeight;
               if(parseInt(currentMaxHeight) != 0 && currentMaxHeight != '' ){
                  setTimeout(()=>{currentElemToggle.setAttribute("d", "M33 20L25 30L17 20")}, 750);
                  currentElemContainer.setAttribute("area-expanded", "false");
                  currentElemContainer.removeAttribute("style");
               }
               else{
                  currentElemContainer.setAttribute("area-expanded", "true");
                  currentElemContainer.style.maxHeight = maxHeight + "px";
                  currentElemToggle.setAttribute("d", "M33 29L25 21L17 29");
               }
             }
             else{
                currentMaxHeight = currentElemContainer.style.maxHeight;
                if(parseInt(currentMaxHeight) != 0 && currentMaxHeight != ''){
                  setTimeout(()=>{currentElemToggle.setAttribute("d", "M33 20L25 30L17 20")}, 750);
                  currentElemContainer.setAttribute("area-expanded", "false");
                  currentElemContainer.removeAttribute("style");
               }
               else{
                  currentElemContainer.style.maxHeight = maxHeight + "px";
                  currentElemContainer.setAttribute("area-expanded", "true");
                  currentElemToggle.setAttribute("d", "M33 29L25 21L17 29");
               }
            }
         }
      });
   }
   if(window.location.pathname == "/sveden/eduStandarts/"){
      convertToDropdown();
      let charPos = 0, elemHeight = 0, maxHeight, currentMaxHeight = 0, strLength, links, mb, subString, currentElemToggle, containerTitle, spo = [], voBach = [], voMag = [], voSpec = [], fgosContainer;
      elemTitle = document.querySelectorAll(".eduStandarts-list-item-title");
      let sectionContainer = document.createElement("div");
      sectionContainer.classList.add("eduStandarts-list-item");
      sectionContainer.classList.add("eduStandarts-list-section-title");
      for(i = 0; i < elemTitle.length; i++){
         charPos = elemTitle[i].innerText.indexOf("-") +2;
         if(elemTitle[i].children[0].offsetWidth != 0){
            strLength = elemTitle[i].children[0].innerText.length;
            subString = elemTitle[i].innerText.substring(charPos, elemTitle[i].innerText.length);  
            subString = " " + subString;
            strLength += subString.length;
            elemTitle[i].children[0].innerText += subString;   
            elemTitle[i].innerText = elemTitle[i].innerText.substring(0, strLength);
         }
         if(elemTitle[i].innerText.includes(".02.")){
            sectionContainer.innerHTML = elemTitle[i].parentNode.innerHTML;
            spo[i] = sectionContainer.outerHTML;
         }
         if(elemTitle[i].innerText.includes(".03.")){
            sectionContainer.innerHTML = elemTitle[i].parentNode.innerHTML;
            voBach[i] = sectionContainer.outerHTML;
         }
         if(elemTitle[i].innerText.includes(".04.")){
            sectionContainer.innerHTML = elemTitle[i].parentNode.innerHTML;
            voMag[i] = sectionContainer.outerHTML;
         }
         if(elemTitle[i].innerText.includes(".05.")){
            sectionContainer.innerHTML = elemTitle[i].parentNode.innerHTML;
            voSpec[i] = sectionContainer.outerHTML;
         }
      }
      elemTitle[0].parentNode.parentNode.parentNode.removeChild(elemTitle[0].parentNode.parentNode);
      let fgos = document.createElement("div");
      fgos.classList.add("eduStandarts");
      fgos.classList.add("eduStandarts-graduate");
      let eduItem = document.createElement("div");
      eduItem.classList.add("eduStandarts-graduate-item");
      fgos.insertBefore(eduItem, fgos.children[1]);
      let fgosTitle = document.createElement("div");
      fgosTitle.classList.add("eduStandarts-title");
      if(spo != null){
         let eduItem = document.createElement("div");
         eduItem.classList.add("eduStandarts-graduate-item");
         fgos.insertBefore(eduItem, fgos.children[0]);
         let fgosTitle = document.createElement("div");
         fgosTitle.classList.add("eduStandarts-title");
      
         let container = document.createElement("div");
         container.classList.add("eduStandarts-graduate-container");
         eduItem.insertBefore(fgosTitle, eduItem.children[0]);
         eduItem.insertBefore(container, eduItem.children[1]);
         fgosTitle.innerHTML = "ФГОС СПО";
         container.innerHTML = "";
         for(i = 0; i < spo.length; i++){
            container.innerHTML += spo[i];
         }
         fgosContainer = document.querySelector(".vikon-responsive-table");
         fgosContainer.insertBefore(fgos, fgosContainer.children[fgosContainer.children.length-1]);
      }
      let fullContainer = document.createElement("div");
      fullContainer.classList.add("eduStandarts-graduate-vo-container");
      if(voBach != null){
         let fgosTitle = document.createElement("div");
         fgosTitle.classList.add("eduStandarts-title");
         fgosTitle.innerHTML = "ФГОС ВО";
         eduItem.insertBefore(fgosTitle, eduItem.children[0]);
         let bachContainer = document.createElement("div");
         bachContainer.classList.add("eduStandarts-bachelor");
         eduItem.insertBefore(fullContainer, eduItem.children[1]);
         fullContainer.appendChild(bachContainer);
         fgosTitle = document.createElement("div");
         fgosTitle.classList.add("eduStandarts-title");
         fgosTitle.innerHTML = "Бакалавриат";
         bachContainer.appendChild(fgosTitle);
         let fgosItemsContainer = document.createElement("div");
         fgosItemsContainer.classList.add("eduStandarts-bachelor-container");
         bachContainer.appendChild(fgosItemsContainer);
         for(i = 0; i < voBach.length; i++){
           if(voBach[i] != undefined){
            fgosItemsContainer.innerHTML += voBach[i];
           }
         }
      }
      if(voSpec != null){
         let bachContainer = document.createElement("div");
         bachContainer.classList.add("eduStandarts-specialist");
         eduItem.insertBefore(fullContainer, eduItem.children[1]);
         fullContainer.appendChild(bachContainer);
         fgosTitle = document.createElement("div");
         fgosTitle.classList.add("eduStandarts-title");
         fgosTitle.innerHTML = "Специалитет";
         bachContainer.appendChild(fgosTitle);
         let fgosItemsContainer = document.createElement("div");
         fgosItemsContainer.classList.add("eduStandarts-specialist-container");
         bachContainer.appendChild(fgosItemsContainer);
         for(i = 0; i < voSpec.length; i++){
            if(voSpec[i] != undefined){
             fgosItemsContainer.innerHTML += voSpec[i];
            }
          }
      }
      if(voMag != null){
         let bachContainer = document.createElement("div");
         bachContainer.classList.add("eduStandarts-magister");
         eduItem.insertBefore(fullContainer, eduItem.children[1]);
         fullContainer.appendChild(bachContainer);
         fgosTitle = document.createElement("div");
         fgosTitle.classList.add("eduStandarts-title");
         fgosTitle.innerHTML = "Магистратура";
         bachContainer.appendChild(fgosTitle);
         let fgosItemsContainer = document.createElement("div");
         fgosItemsContainer.classList.add("eduStandarts-magister-container");
         bachContainer.appendChild(fgosItemsContainer);
         for(i = 0; i < voMag.length; i++){
            if(voMag[i] != undefined){
             fgosItemsContainer.innerHTML += voMag[i];
            }
          }
      }     
      elemTitle = document.querySelectorAll(".eduStandarts-list-item-title");
      let innerText;
      for(i = 0; i < elemTitle.length; i++){
         if(elemTitle[i].innerHTML.includes("<span>")){
            innerText = "<span>" + elemTitle[i].innerText + "</span>";
            elemTitle[i].innerText = "";
            elemTitle[i].innerHTML = innerText;
         }
      } 
      addToggle();
      containerTitle = document.querySelectorAll(".eduStandarts-list-item-container");
      for(i=0; i<containerTitle.length; i++){
         containerTitle[i].children[0].innerHTML = "<b>Уровень образования: </b>" + containerTitle[i].children[0].innerHTML;
         for(j=1; j<containerTitle[i].childElementCount; j++){
            if(containerTitle[i].children[j].children[0].innerHTML.includes("Не предусмотрен") || containerTitle[i].children[j].children[0].innerHTML.includes("Не предусмотрены") || containerTitle[i].children[j].children[0].innerHTML.includes("Нет информации")){
               containerTitle[i].children[j].children[0].innerHTML = "";
            }
         }
      }
      document.addEventListener("click", function(e){
         if(e.target.classList.contains("eduStandarts-list-item-title")){currentElem = e.target.parentNode;}
         else if(e.target.classList.contains("eduStandarts-title")){currentElem = e.target.parentNode;}
         else if(e.target.tagName == "path" || e.target.tagName == "circle"){currentElem = e.target.parentNode.parentNode.parentNode.parentNode;}
         else if(e.target.tagName == "svg"){currentElem = e.target.parentNode.parentNode.parentNode;}
         else if(e.target.tagName == "SPAN"){currentElem = e.target.parentNode.parentNode;}
         else{currentElem = null;}
         maxHeight = 0;
         mb = 0;
         if(currentElem != null){
            currentElemContainer = currentElem.children[1];
            if(currentElem.children[0].children[0].tagName == "SPAN"){
               currentElemToggle = currentElem.children[0].children[1].children[0].children[1];
            }
            else{
               currentElemToggle = currentElem.children[0].children[0].children[0].children[1];
            }
            links = currentElemContainer.querySelectorAll("a");
            if(links.length != 0){
               mb = checkIndentation(links[0]);
            }    
            if(mb != null){
               mb = mb * links.length;
            }        
            for(i = 0; i < currentElemContainer.childElementCount; i++){
               mb += checkIndentation(currentElemContainer.children[i]);
               maxHeight += currentElemContainer.children[i].offsetHeight;
            }
            if(currentElemContent != currentElem.children[0].innerText){
               currentElemContent = currentElem.children[0].innerText;
               currentMaxHeight = currentElemContainer.style.maxHeight;
               if(parseInt(currentMaxHeight) != 0 && currentMaxHeight != ""){
                  setTimeout(()=>{currentElemToggle.setAttribute("d", "M33 20L25 30L17 20")}, 750);
                  currentElemContainer.setAttribute("area-expanded", "false");
                  currentElemContainer.removeAttribute("style");              
               }
               else{
                  currentElemToggle.setAttribute("d", "M33 29L25 21L17 29");
                  currentElemContainer.setAttribute("area-expanded", "true");
                  maxHeight += mb;
                  currentElemContainer.style.maxHeight = maxHeight + "px";
                  if(currentElem.classList.contains("eduStandarts-bachelor") || currentElem.classList.contains("eduStandarts-specialist") || currentElem.classList.contains("eduStandarts-magister")){
                     currentElem.parentNode.style.maxHeight = parseInt(currentElem.children[1].style.maxHeight) + parseInt(currentElem.parentNode.style.maxHeight) + "px";
                  }
                  if(currentElem.classList.contains("eduStandarts-list-section-title")){
                     elemHeight = parseInt(currentElem.children[1].style.maxHeight);
                     if(currentElem.parentNode.parentNode.children[1] != undefined){
                        currentElem.parentNode.parentNode.children[1].style.maxHeight = elemHeight + parseInt(currentElem.parentNode.parentNode.children[1].style.maxHeight) + "px";
                     }
                     if(currentElem.parentNode.parentNode.classList.contains("eduStandarts-bachelor")){
                        currentElem = currentElem.parentNode.parentNode.children[0];
                     }
                     else if(currentElem.parentNode.parentNode.classList.contains("eduStandarts-specialist")){
                        currentElem = currentElem.parentNode.parentNode.children[1];
                     }
                     else if(currentElem.parentNode.parentNode.classList.contains("eduStandarts-magister")){
                        currentElem = currentElem.parentNode.parentNode.children[1];
                     }
                     if(currentElem.parentNode.parentNode != undefined){
                        currentElem = currentElem.parentNode.parentNode;
                        currentElem.setAttribute("area-expanded", "true");
                        currentElem.style.maxHeight = elemHeight + parseInt(currentElem.style.maxHeight) + "px";
                     }
                  }
               }
            }
            else{
               currentMaxHeight = currentElemContainer.style.maxHeight;
               if(parseInt(currentMaxHeight) != 0 && currentMaxHeight != ""){
                  setTimeout(()=>{currentElemToggle.setAttribute("d", "M33 20L25 30L17 20")}, 750);
                  currentElemContainer.setAttribute("area-expanded", "false");
                  currentElemContainer.removeAttribute("style");
               }
               else{
                  currentElemToggle.setAttribute("d", "M33 29L25 21L17 29");
                  currentElemContainer.setAttribute("area-expanded", "true");
                  maxHeight += mb;
                  currentElemContainer.style.maxHeight = maxHeight + "px";
               }
            } 
         }
      });
   }
   if(window.location.pathname == "/sveden/employees/"){
      convertToDropdown();
      let phone, email, post, uchSovetItem, search, titles, programsStaff;
      search = document.querySelector(".finder-container");
      search.parentNode.removeChild(search);
      post = document.querySelectorAll('div[itemprop="post"]');
      phone = document.querySelectorAll('div[itemprop="telephone"]');
      email = document.querySelectorAll('div[itemprop="email"]');
      for(i=0; i<post.length; i++){
         post[i].innerHTML = "<b>Должность:</b> " + post[i].innerHTML;
      }
      for(i=0; i<phone.length; i++){
         phone[i].innerHTML = "<b>Телефон:</b> " + phone[i].innerHTML;
      }
      for(i=0; i<email.length; i++){
         email[i].innerHTML = "<b>Электронная почта:</b> " + email[i].innerHTML;
      }
      uchSovetItem = document.querySelectorAll(".employees-list-section-title");
      for(i=0; i<uchSovetItem.length; i++){
         if(uchSovetItem[i].children[1].children[0] != null){
            if(uchSovetItem[i].children[1].children[0].innerHTML == ""){
               uchSovetItem[i].children[1].children[0].innerHTML = "<b>Должность: </b> -";
            }
            else{
               uchSovetItem[i].children[1].children[0].innerHTML = "<b>Должность: </b>" + uchSovetItem[i].children[1].children[0].innerHTML;
            }
         }
         if(uchSovetItem[i].children[1].children[1] != null){
            uchSovetItem[i].children[1].children[1].innerHTML = "<b>Ученая степень: </b>" + uchSovetItem[i].children[1].children[1].innerHTML;
         }
         if(uchSovetItem[i].children[1].children[2] != null){
            uchSovetItem[i].children[1].children[2].innerHTML = "<b>Ученое звание: </b>" + uchSovetItem[i].children[1].children[2].innerHTML;
         }
      }
      titles = document.querySelectorAll(".vikon-title-block");
      titles[0].innerText = "Руководитель образовательной оргарнизации";
      titles[1].innerText = "Заместители руководителя образовательной оргарнизации";
      programsStaff = document.querySelectorAll('div[itemprop="teachingOp"]');
      for(i=0;i<programsStaff.length;i++){
         if(programsStaff[i].children[0] != undefined){
            programsStaff[i].children[0].innerHTML = "<b>Код профессии, специальности, направления подготовки, научной специальности, шифр группы научных специальностей:</b><br>" +  programsStaff[i].children[0].innerHTML;
         }
         if(programsStaff[i].children[1].children[0] != undefined){
            programsStaff[i].children[1].children[0].innerHTML = "<b>Образовательная программа, направленность, профиль, шифр и наименование научной специальности:</b><br>" +  programsStaff[i].children[1].children[0].innerHTML;
         }
         if(programsStaff[i].children[1].children[1] != undefined){
            programsStaff[i].children[1].children[1].innerHTML = "<b>Уровень образования: </b><br>" + programsStaff[i].children[1].children[1].innerHTML;
         }
         if(programsStaff[i].children[1].children[2] != undefined){
            programsStaff[i].children[1].children[2].innerHTML = "<b>Ссылка на страницу с информацией о ППС: </b><br>" + programsStaff[i].children[1].children[2].innerHTML;
         }
      }
      addToggle();
      document.addEventListener("click", function(e){
         maxHeight = 0;
         if(e.target.classList.contains("vikon-title-block")){
            currentElemContent = e.target.parentNode.parentNode.children[1];
         }
         else if(e.target.classList.contains("employee-block-title")){
            currentElemContent = e.target.parentNode.children[1];
         }
         else if(e.target.tagName == "circle" || e.target.tagName == "path"){
            currentElemContent = e.target.parentNode.parentNode.parentNode.parentNode.children[1];
         }
         else if(e.target.tagName == "svg"){
            currentElemContent = e.target.parentNode.parentNode.parentNode.children[1];
         }
         else{
            currentElemContent = null;
         }
         blockItemToggle = currentElemContent.parentNode.children[0].children[1].children[0].children[1];
         if(currentElemContent != null){
            if(currentElemContent.hasAttribute("style")){
               currentElemContent.removeAttribute("style");
               setTimeout(()=>{blockItemToggle.setAttribute("d", "M33 20L25 30L17 20")}, 1800);
            }
            else{
               if(currentElemContent.classList.contains("teaching-staff-content")){
                  for(i=0; i<currentElemContent.children.length; i++){
                     maxHeight += currentElemContent.children[i].offsetHeight;
                  }
                  maxHeight += parseInt(window.getComputedStyle(currentElemContent.children[0].children[currentElemContent.children[0].children.length-1]).getPropertyValue("margin-bottom"));
               }
               else{
                  maxHeight = currentElemContent.children[0].offsetHeight;
               }
               maxHeight += checkIndentation(currentElemContent.children[0]);
               currentElemContent.style.cssText="max-height: " +  maxHeight + "px";
               blockItemToggle.setAttribute("d", "M33 29L25 21L17 29");
            }
         }
      });
   }
   if(window.location.pathname == "/sveden/objects/"){
      convertToDropdown();
      let nameCab, addressCab, obj, individual, repalceStr, repalcedStr, splitArr;
      individual = document.querySelector("#individual");
      nameCab = document.querySelectorAll('div[itemprop="nameCab"]');
      addressCab = document.querySelectorAll('div[itemprop="addressCab"]');
      for(i=0; i<nameCab.length; i++){
         nameCab[i].innerHTML = "<b>Наименование объекта:</b> " + nameCab[i].innerHTML;
      }
      for(i=0; i<addressCab.length; i++){
         addressCab[i].innerHTML = "<b>Адрес:</b> " + addressCab[i].innerHTML;
      }
      function convertObj(obj){
         if(obj[0].getAttribute("itemprop") == "purposeCab"){
            for(i=0; i<obj.length; i++){
               if(obj[i].children[1].children[2] != undefined){
                  obj[i].children[1].children[2].innerHTML = "<b>Количество оборудованных учебных кабинетов: </b> " + obj[i].children[1].children[2].innerHTML;
               }
               if(obj[i].children[1].children[3] != undefined){
                  obj[i].children[1].children[3].innerHTML = "<b>Общая площадь (кв.м.): </b> " + obj[i].children[1].children[3].innerHTML + "<br>";
               }
               if(obj[i].children[1].children[4] != undefined){
                  obj[i].children[1].children[4].innerHTML = "<b>Количество объектов для проведения практических занятий: </b> " + obj[i].children[1].children[4].innerHTML;
               }
               if(obj[i].children[1].children[5] != undefined){
                  obj[i].children[1].children[5].innerHTML = "<b>Общая площадь (кв.м.): </b> " + obj[i].children[1].children[5].innerHTML;
               }
            }
         }
         else{
            for(i=0; i<obj.length; i++){
               if(obj[i].children[0] != undefined){
                  obj[i].children[0].innerHTML = "<b>Наименование объекта: </b>" + obj[i].children[0].innerHTML;
               }
               if(obj[i].children[1].children[0] != undefined){
                  obj[i].children[1].children[0].innerHTML = "<b>Вид помещения: </b>" + obj[i].children[1].children[0].innerHTML;
               }
               if(obj[i].children[1].children[1] != undefined){
                  obj[i].children[1].children[1].innerHTML = "<b>Адрес: </b>" + obj[i].children[1].children[1].innerHTML;
               }
               if(obj[0].getAttribute("itemprop") == "health"){
                  if(obj[i].children[1].children[2] != undefined){
                     if(obj[i].children[1].children[2].innerHTML.includes("href")){
                        obj[i].children[1].children[2].innerHTML = "<b>Лицензии и положения (при наличии): </b><br>" + obj[i].children[1].children[2].innerHTML;
                     }
                     else{
                        obj[i].children[1].children[2].innerHTML = "<b>Лицензии и положения (при наличии): </b><br> - ";
                     }
                  }
                  if(obj[i].children[1].children[4] != undefined){
                     obj[i].children[1].children[4].innerHTML = "<b>Количество посадочных мест: </b>" + obj[i].children[1].children[4].innerHTML;
                  }
                  if(obj[i].children[1].children[5] != undefined){
                     obj[i].children[1].children[5].innerHTML = "<b>Общая площадь (кв.м.): </b>" + obj[i].children[1].children[5].innerHTML;
                  }
                  if(obj[i].children[1].children[6] != undefined && obj[i].children[1].children[6].children.length > 0){
                     obj[i].children[1].children[6].innerHTML = "<b>График работы: </b>" + obj[i].children[1].children[6].innerHTML;
                  }
               }
               else{
                  if(obj[i].children[1].children[3] != undefined){
                     if(obj[i].children[1].children[3].innerHTML.includes("href")){
                        obj[i].children[1].children[3].innerHTML = "<b>Лицензии и положения (при наличии): </b><br>" + obj[i].children[1].children[3].innerHTML;
                     }
                     else{
                        obj[i].children[1].children[3].innerHTML = "<b>Лицензии и положения (при наличии): </b><br> - ";
                     }
                  }
                  if(obj[i].children[1].children[4] != undefined){
                     obj[i].children[1].children[4].innerHTML = "<b>Количество посадочных мест: </b>" + obj[i].children[1].children[4].innerHTML;
                  }
                  if(obj[i].children[1].children[5] != undefined){
                     obj[i].children[1].children[5].innerHTML = "<b>Общая площадь (кв.м.): </b>" + obj[i].children[1].children[5].innerHTML;
                  }
               }
            }
         }
      }
      obj = document.querySelectorAll('div[itemprop="purposeCab"]');
      convertObj(obj);
      obj = document.querySelectorAll('div[itemprop="purposeLibr"]');
      convertObj(obj);
      obj = document.querySelectorAll('div[itemprop="purposeSport"]');
      convertObj(obj);
      obj = document.querySelectorAll('div[itemprop="meals"]');
      convertObj(obj);
      obj = document.querySelectorAll('div[itemprop="health"]');
      convertObj(obj);
      obj = individual.querySelector(".vikon-row").children[1];
      for(i=0; i<obj.children.length; i++){
         repalceStr = obj.children[i].innerHTML.slice(0, obj.children[i].innerHTML.indexOf(":")+1);
         repalceStr += "<br>";
         repalcedStr = obj.children[i].innerHTML.slice(0, obj.children[i].innerHTML.indexOf(":")+1);
         obj.children[i].innerHTML = obj.children[i].innerHTML.replace(repalcedStr, repalceStr);
         repalceStr = obj.children[i].innerHTML;
         splitArr = repalceStr.split(';');
         repalcedStr = "";
         for(j=0; j<splitArr.length; j++){
            splitArr[j] += "<br>";
            repalcedStr += splitArr[j];
         }
         obj.children[i].innerHTML = repalcedStr;
      }
   }
   if(window.location.pathname == "/sveden/grants/"){
      let grantsList, grantsListTitle, grantsListContainer, elem, grantsListElem, container, hostel, info;
      convertToDropdown();
      grantsList = document.querySelectorAll('div[itemprop="graduateJob"'); 
         for(i=0; i<grantsList.length; i++){
            grantsList[i].children[0].innerHTML = "<b>Код профессии, специальности, направления подготовки, научной специальности, шифр группы научных специальностей:<br></b>" + grantsList[i].children[0].innerHTML;
            elem = grantsList[i].children[1];
            if(elem.children[0] != undefined){
               elem.children[0].innerHTML = "<b>Наименование профессии, специальности, направления подготовки наименование группы научных специальностей:<br></b>" +  elem.children[0].innerHTML;
            }
            if(elem.children[1] != undefined){
               elem.children[1].innerHTML = "<b>Образовательная программа, направленность, профиль, шифр и наименование научной специальности:<br></b>" +  elem.children[1].innerHTML;
            }
            if(elem.children[2] != undefined){
               elem.children[2].innerHTML = "<b>Количество выпускников:<br></b>" +  elem.children[2].innerHTML;
            }
            if(elem.children[3] != undefined){
               elem.children[3].innerHTML = "<b>Направлено на места трудоустройства:<br></b>" +  elem.children[3].innerHTML;
            }
            if(elem.children[4].innerHTML != undefined){
               elem.children[4].innerHTML = "<b>Количество трудоустроенных выпускников:<br></b>" +  elem.children[4].innerHTML;
            }
         }
         grantsList = document.querySelector('#anchor_graduateJob').parentNode; 
         for(i=0; i<grantsList.childElementCount; i++){
            if(grantsList.children[i].tagName == "B"){
               grantsList.children[i].outerHTML = '<div class="grants-list-block-title">' + grantsList.children[i].innerHTML;
            }
            if(grantsList.children[i].classList.contains("vikon-responsive-table")){
               grantsList.children[i].classList.add("grants-list-container");
            }
         }
         grantsListTitle = grantsList.querySelectorAll(".grants-list-block-title");
         grantsListContainer = grantsList.querySelectorAll(".grants-list-container");
         container = document.querySelector("#anchor_graduateJob").parentNode;
         for(i=0; i<grantsListTitle.length; i++){
            grantsListElem = document.createElement("div");
            grantsListElem.classList.add("grants-list-elem");
            grantsListElem.insertBefore(grantsListTitle[i], grantsListElem.children[0]);
            grantsListElem.insertBefore(grantsListContainer[i], grantsListElem.children[1]);
            container.insertBefore(grantsListElem, container.children[i+1]);
         }
         addToggle();
         grantsListItem = grantsList.querySelectorAll(".grants-list-item");
         for(i=0; i<grantsListItem.length; i++){
            grantsListItem[i].children[1].insertBefore(grantsListItem[i].children[0], grantsListItem[i].children[1].children[0]);
         }
         hostel = document.querySelector("figure.table");
         hostel.outerHTML = '<div class="hostel-info">' + hostel.innerHTML + "</div>";
         hostel.querySelectorAll(".hostel-info");
         document.addEventListener("click", function(e){
            if(e.target.tagName == "B"){
               currentElem = e.target.parentNode.parentNode.parentNode;
            }
            else if(e.target.classList.contains("grants-list-block-title")){
               currentElem = e.target.parentNode;
            }
            else if(e.target.tagName == "svg"){
               currentElem = e.target.parentNode.parentNode.parentNode;
            }
            else if(e.target.tagName == "path" || e.target.tagName == "circle"){
               currentElem = e.target.parentNode.parentNode.parentNode.parentNode;
            }
            else{
               currentElem = null;
            }
            if(currentElem != null){
               blockItemToggle = currentElem.children[0].children[1].children[0].children[1];
               currentElemContent = currentElem.children[1];
               if(currentElemContent.hasAttribute("style")){
                  currentElemContent.removeAttribute("style");
                  setTimeout(()=>{blockItemToggle.setAttribute("d", "M33 20L25 30L17 20")}, 1000);
               }
               else{
                  blockItemToggle.setAttribute("d", "M33 29L25 21L17 29");
                  mb = 0;
                  if(window.getComputedStyle(currentElemContent.children[0].children[0]).getPropertyValue("margin")){
                     
                     mb = checkIndentation(currentElemContent.children[0].children[0]);
                     mb = mb * currentElemContent.children[0].children.length;
                  }
                  if(mb != 0){
                     maxHeight = currentElemContent.children[0].offsetHeight;
                     maxHeight += mb;
                  }
                  else{
                     maxHeight = currentElemContent.children[0].offsetHeight;
                  }
                  currentElemContent.style.cssText = "max-height: " + maxHeight + "px";
               }
            }
         });
   }
   if(window.location.pathname == "/sveden/ovz/"){
      convertToDropdown();
      let item, elem, j = 0, pos = 0, cabElem, maxHeight = 0;
      item = document.querySelectorAll('div[itemprop="objAddress"]');
      for(i=0; i<item.length; i++){
         elem = document.createElement("div");
         elem.innerHTML="<b>Адрес:</b> ";
         item[i].parentNode.insertBefore(elem, item[i]);
      }
      item = document.querySelectorAll('div[itemprop="objCnt"]');
      for(i=0; i<item.length; i++){
         elem = document.createElement("div");
         elem.innerHTML = "<b>Количество посадочных мест</b>";
         item[i].parentNode.insertBefore(elem, item[i]);
         elem = document.createElement("div");
         elem.innerHTML = "<b>Всего:</b>";
         item[i].parentNode.insertBefore(elem, item[i]);
         elem = document.createElement("div");
         elem.innerHTML = "<b>в том числе приспособленных для использования инвалидами и лицами с ОВЗ:</b>";
         pos = [].indexOf.call(item[i].parentNode.children, item[i]);
         pos += 1;
         item[i].parentNode.insertBefore(elem, item[i].parentNode.children[pos]);
      }
      item = document.querySelectorAll('div[itemprop="objSq"]');
      for(i=0; i<item.length; i++){
         elem = document.createElement("div");
         elem.innerHTML = "<b>Общая площадь(кв.м.)</b>";
         item[i].parentNode.insertBefore(elem, item[i]);
         elem = document.createElement("div");
         elem.innerHTML = "<b>Всего:</b>";
         item[i].parentNode.insertBefore(elem, item[i]);
         elem = document.createElement("div");
         elem.innerHTML = "<b>в том числе приспособленных для использования инвалидами и лицами с ОВЗ:</b>";
         pos = [].indexOf.call(item[i].parentNode.children, item[i]);
         pos += 1;
         item[i].parentNode.insertBefore(elem, item[i].parentNode.children[pos]);
      }
      item = document.querySelectorAll(".ovz-list-item");
      for(i=0; i<item.length; i++){
         elem = document.createElement("div");
         elem.classList.add("ovz-list-item-title");
         item[i].insertBefore(elem, item[i].children[0]);
         item[i].children[0].insertBefore(item[i].children[1], item[i].children[0].children[0]);
      }
      item = document.querySelectorAll('div[itemprop="objOvz"');
      for(i=0; i<item.length; i++){
         elem = document.createElement("div");
         elem.innerHTML="<b>График работы:</b>";
         pos = [].indexOf.call(item[i].parentNode.children, item[i]);
         pos = pos - 1;
         if(item[i].parentNode.children[pos].innerHTML.includes("Пн")){
            item[i].parentNode.insertBefore(elem, item[i].parentNode.children[pos]);
         }
      }
      item = document.querySelectorAll('div[itemprop="purposeCab"]');
      for(i=0; i<item.length; i++){
         container = item[i].children[1];
         elem = document.createElement("div");
         elem.innerHTML="<b>Адрес:</b> ";
         container.insertBefore(elem, container.children[0]);
         elem = document.createElement("div");
         elem.innerHTML="<b>Оборудованные учебные кабинеты:</b> ";
         cabElem = container.querySelector('div[itemprop="osnCab"]');
         pos = [].indexOf.call(container.children, cabElem);
         pos++;
         container.insertBefore(elem, container.children[pos]);
         elem = document.createElement("div");
         elem.innerHTML="<b>Всего:</b> ";
         container.insertBefore(elem, container.children[pos+1]);
         container.children[pos+2].innerHTML = "<i>Количество:</i> " + container.children[pos+2].innerHTML;
         container.children[pos+3].innerHTML = "<i>Общая площадь (кв.м.):</i> " + container.children[pos+3].innerHTML;
         elem = document.createElement("div");
         elem.innerHTML="<b>в том числе приспособленных для использования инвалидами и лицами с ОВЗ:</b> ";
         container.insertBefore(elem, container.children[pos+4]);
         container.children[pos+5].innerHTML = "<i>Количество:</i> " + container.children[pos+5].innerHTML;
         container.children[pos+6].innerHTML = "<i>Общая площадь (кв.м.):</i> " + container.children[pos+6].innerHTML;
         elem = document.createElement("div");
         elem.innerHTML="<b>Объекты для проведения практических занятий</b> ";
         container.insertBefore(elem, container.children[pos+7]);
         elem = document.createElement("div");
         elem.innerHTML="<b>Всего:</b> ";
         container.insertBefore(elem, container.children[pos+8]);
         container.children[pos+9].innerHTML = "<i>Количество:</i> " + container.children[pos+9].innerHTML;
         container.children[pos+10].innerHTML = "<i>Общая площадь (кв.м.):</i> " + container.children[pos+10].innerHTML;       
         elem = document.createElement("div");
         elem.innerHTML="<b>в том числе приспособленных для использования инвалидами и лицами с ОВЗ:</b> ";
         container.insertBefore(elem, container.children[pos+11]);
         container.children[pos+12].innerHTML = "<i>Количество:</i> " + container.children[pos+12].innerHTML;
         container.children[pos+13].innerHTML = "<i>Общая площадь (кв.м.):</i> " + container.children[pos+13].innerHTML;
      }
      addToggle();
      document.addEventListener("click", function(e){
         if(e.target.classList.contains("ovz-list-item-title")){
            currentElem = e.target.parentNode;
         }
         else if(e.target.hasAttribute("itemprop")){
            if(e.target.getAttribute("itemprop") == "vikon_identityRow"){
               currentElem = e.target.parentNode.parentNode.parentNode;
            }
            else{
               currentElem = e.target.parentNode.parentNode;
            }
         }
         else if(e.target.tagName == "svg"){
            currentElem = e.target.parentNode.parentNode.parentNode;
         }
         else if(e.target.tagName == "path" || e.target.tagName == "circle"){
            currentElem = e.target.parentNode.parentNode.parentNode.parentNode;
         }
         else{
            currentElem = null;
         }
         if(currentElem != null){
            blockItemToggle = currentElem.children[0].children[1].children[0].children[1];
            currentElemContent = currentElem.children[1];
            if(currentElemContent.hasAttribute("style")){
               currentElemContent.removeAttribute("style");
               currentElemContent.setAttribute("area-expanded", "false");
               setTimeout(()=>{blockItemToggle.setAttribute("d", "M33 20L25 30L17 20")}, 500);
            }
            else{
               currentElemContent.setAttribute("area-expanded", "true");
               maxHeight = 0;
               for(i=0; i<currentElemContent.childElementCount; i++){
                  maxHeight += currentElemContent.children[i].offsetHeight;
               }
               maxHeight += checkIndentation(currentElemContent);
               blockItemToggle.setAttribute("d", "M33 29L25 21L17 29");
               currentElemContent.style.maxHeight = maxHeight + "px";
            }
         }
      });
   }
   if(window.location.pathname == "/sveden/budget/"){
      convertToDropdown();
      let content, container, string = [], check, list;
      list = document.querySelectorAll(".budget-list");  
      document.addEventListener("keydown", function(k){
          if(k.key == "Escape"){
            if(document.querySelector("body").style.overflow == "hidden"){
               setTimeout(()=>{document.querySelector("body").style.overflow = "scroll";}, 500); 
            }
          }
      }); 
      document.addEventListener("click", function(e){
         if(e.target.getAttribute("aria-hidden") || e.target.getAttribute("data-dismiss")){
            setTimeout(()=>{document.querySelector("body").style.overflow = "scroll";}, 500); 
         }
         if(e.target.classList.contains("showpart-btn-modal")){
            document.querySelector("body").style.overflow = "hidden";
            content = document.querySelector(".modal-content");
            if(!content.innerHTML.includes("table")){
               container = content.querySelector(".modal-body");
               for(i=0; i<container.childElementCount; i++){
                  check = 0;
                     if(container.children[i].innerText.indexOf("-") != "-1"){
                        check = 1;
                        string = container.children[i].innerHTML.split("-");
                     }
                     else{
                        string = container.children[i].innerHTML.split("</strong>");
                     }
                     if(string.length != 0){
                        container.children[i].innerHTML = "";
                        if(check == 1){
                           for(j=0; j<string.length; j++){
                              if(!string[j].includes("<strong>") && string[j].length > 5){
                                 if(string[j].search(/\d/) != "-1"){
                                    if(!string[j].includes("i")){
                                       string[j] = "- " + string[j];
                                    }
                                    else{
                                       splitArr = string[j].split("<i>");
                                       string[j] = "";
                                       for(k = 0; k < splitArr.length; k++){
                                          if(splitArr[k].length > 0){
                                             if(splitArr[k].includes("в том числе:")){
                                                splitArr[k] = "<i>" + splitArr[k] + "</i>";
                                             }
                                             else{
                                                if(j > 0){
                                                      splitArr[k] = "<br><i>" + splitArr[k] + "</i>";
                                                }
                                                else{
                                                   if(k <= 1){
                                                      splitArr[k] = "<i>" + splitArr[k] + "</i>";
                                                   }
                                                   else{
                                                      splitArr[k] = "<br><i>" + splitArr[k] + "</i>";
                                                   }
                                                }
   
                                             }
   
                                          }
                                          string[j] += splitArr[k];
                                       }   
                                       if(string[j].includes("дети</i>")){
                                          string[j] = string[j].replace("</i>", " "); 
                                       }
                                       if(string[j].includes("<br><i>сироты)")){
                                          string[j] = string[j].replace("<br><i>сироты)", "<i>-сироты)</i>");         
                                       }          
                                    }
                                 }
                                 if(string[j].search("<br>") != "-1"){
                                       if(!string[j].includes("i")){
                                          string[j] = "- " + string[j];
                                       }
                                 }
                                 else{
                                    if(string[j].search("-") != "-1"){
                                       string[j] = string[j];
                                    }
                                    else{
                                       if(string[j-1] != ""){
                                          if(!string[i].includes("i")){
                                             string[j] = "<br>- " + string[j];
                                          }
                                       }
                                       else{
                                          string[j] = "- " + string[j]; 
                                       }
                                    }
                                 }
                              }
                              else{
                                   if(string[j].length > 5){
                                    if(string[j].includes("юридические") || string[j].includes("физические")){
                                       string[j] = "<br>- " + string[j];
                                    }
                                    if(string[j].includes("в том числе, от иностранцев")){
                                       string[j] = string[j].replace(string[j].slice(string[j].indexOf("в том числе")), "<br>"+string[j].slice(string[j].indexOf("в том числе")));
                                    }
                                    if(string[j].includes("Федеральный бюджет:")){
                                       string[j] = string[j].replace(string[j].slice(string[j].indexOf("Федеральный бюджет:")), "<br>"+string[j].slice(string[j].indexOf("Федеральный бюджет:")));
                                    }
                                 }
                                 else{
                                    string[j] = string[j];
                                 }
                              }
                              container.children[i].innerHTML += string[j];
                           }
                        }
                        else{
                           for(j=0; j<string.length; j++){
                              if(j > 0){
                                 string[j] = string[j].replace("<i>", "<br><i>");
                              }
                              container.children[i].innerHTML += string[j];
                           }
                        }
                     }
               }
            }
            else{
               container = content.querySelector(".modal-body");
               for(i=0; i<container.childElementCount; i++){
                  if(container.children[i].tagName != "FIGURE"){
                     string = container.children[i].innerHTML.split("</strong>");
                     container.children[i].innerHTML = "";
                     for(j=0; j<string.length; j++){
                        string[j] += "</strong>";
                        if(string[j].includes("<strong>(</strong>")){
                           string[j] = string[j].replace("<strong>(</strong>", "(");
                        }
                        if((j+1) < string.length){
                           if(!string[j+1].includes("тыс. руб.")){
                              string[j] = string[j].replace("</strong>", "</strong><br>");
                           }
                           else if(string[j+1].includes(" тыс. руб.")){
                              string[j] = string[j].replace("</strong>", "</strong><br>");
                           }
                        }
                        container.children[i].innerHTML += string[j];
                     }
                  }
               }
            }
         }
      });
      elem = document.querySelector('div[itemprop="finYear"');
      pasteElem = document.createElement("b");
      pasteElem.innerHTML = "Год: ";
      elem.parentNode.insertBefore(pasteElem, elem);
      elem = document.querySelector('div[itemprop="finPost"');
      pasteElem = document.createElement("b");
      pasteElem.innerHTML = "Поступившие финансовые и материальные средства (тыс. руб.): ";
      elem.parentNode.insertBefore(pasteElem, elem);
      elem = document.querySelector('div[itemprop="finRas"');
      pasteElem = document.createElement("b");
      pasteElem.innerHTML = "Расходованные финансовые и материальные средства (тыс. руб.): ";
      elem.parentNode.insertBefore(pasteElem, elem);
      elem = elem.parentNode;
      elem = elem.children[6];
      splitArr = elem.innerHTML.split("</strong>");
      elem.innerHTML = "";
      for(i=0; i<splitArr.length; i++){
         splitArr[i] += "</strong><br>";
         elem.innerHTML += splitArr[i];
      }
      pasteElem = document.createElement("b");
      pasteElem.innerHTML = "Источники поступления средств";
      elem = elem.parentNode.children[7];
      elem.parentNode.insertBefore(pasteElem, elem);
      elem = elem.parentElement.children[9];
      pasteElem = document.createElement("b");
      pasteElem.innerHTML = "Структура доходов";
      elem.parentNode.insertBefore(pasteElem, elem);
      elem = elem.parentElement.children[11];
      pasteElem = document.createElement("b");
      pasteElem.innerHTML = "Источник расходования средств";
      elem.parentNode.insertBefore(pasteElem, elem);
      elem = elem.parentElement.children[13];
      pasteElem = document.createElement("b");
      pasteElem.innerHTML = "Структура расходов";
      elem.parentNode.insertBefore(pasteElem, elem);
   }
   if(window.location.pathname == "/sveden/education/eduprof/"){
      convertToDropdown();
      let titleElem = document.querySelectorAll('div[itemprop="eduName"]'), title, item, eduCode, container, elem, prevElem, check;
      item = document.querySelectorAll(".eduprof-list-item");
      for(i=0; i<item.length; i++){
         let parentElem = item[i].children[0];
         title = document.createElement("div");
         title.classList.add("eduprof-list-item-title");
         item[i].insertBefore(title, parentElem);
      }
      eduCode = document.querySelectorAll('div[itemprop="eduCode"]');
      title = document.querySelectorAll(".eduprof-list-item-title");
      for(i=0; i<title.length; i++){
         container = document.createElement("div");
         container.classList.add("eduprof-list-item-title-container");
         container.insertBefore(eduCode[i], container.children[0]);
         container.insertBefore(titleElem[i], container.children[0]);
         title[i].insertBefore(container, title[i].children[0]);
      }
      addToggle();
      elem = document.querySelectorAll('div[itemprop="perechenNir"]');
      for(i=0; i<elem.length; i++){
         title = document.createElement("div");
         title.innerHTML = "<b>Научные направления, в рамках которых ведется научная (научно-исследовательская) деятельность:</b>";
         elem[i].parentNode.insertBefore(title, elem[i]);
      }
      elem = document.querySelectorAll('div[itemprop="eduProf"]');
      for(i=0; i<elem.length; i++){
         title = document.createElement("div");
         title.innerHTML = "<b>Образовательная программа, направленность, профиль, шифр и наименование научной специальности:</b>";
         elem[i].parentNode.insertBefore(title, elem[i]);
      }
      elem = document.querySelectorAll('div[itemprop="eduLevel"]');
      for(i=0; i<elem.length; i++){
         title = document.createElement("div");
         title.innerHTML = "<b>Уровень образования:</b>";
         elem[i].parentNode.insertBefore(title, elem[i]);
      }
      elem = document.querySelectorAll('div[itemprop="napravNir"]');
      for(i=0; i<elem.length; i++){
         title = document.createElement("div");
         title.innerHTML = "<b>Название научного направления/научной школы:</b>";
         elem[i].parentNode.insertBefore(title, elem[i]);
      }
      elem = document.querySelectorAll('div[itemprop="resultNir"]');
      for(i=0; i<elem.length; i++){
         title = document.createElement("div");
         title.innerHTML = "<b>Результаты научной (научно-исследовательской) деятельности:</b>";
         elem[i].parentNode.insertBefore(title, elem[i]);
      }
      elem = document.querySelectorAll('div[itemprop="baseNir"]');
      for(i=0; i<elem.length; i++){
         title = document.createElement("div");
         title.innerHTML = "<b>Сведения о научно-исследовательской базе для осуществления научной (научно-исследовательской) деятельности:</b>";
         elem[i].parentNode.insertBefore(title, elem[i]);
      }
      item = document.querySelectorAll(".eduprof-list-item-title-container");
      for(i=0; i<item.length; i++){
         if(item[i] != undefined){
            for(j=0; j<item[i].childElementCount; j++){
               if(item[i].children[j].classList.contains("hide")){
                  elem = item[i].parentNode.parentNode.children[1];
                  elem.parentNode.classList.add("hide");
                  pos = [].indexOf.call(elem.parentNode.parentNode.children, elem.parentNode);
                  check = 0;
                  while(check != 1){
                     if(item[pos].parentNode.parentNode.children[0].children[0].innerHTML.includes("hide")){
                        pos--;
                     }
                     else{
                        check++;
                     }
                  }
                  prevElem = item[pos].parentNode.parentNode.children[1];
                  if(prevElem != undefined){
                     for(k=0; k<elem.childElementCount; k++){
                        prevElem.insertBefore(elem.children[k], prevElem.children[prevElem.childElementCount]);
                        k--;
                     }
                  }
               }
            }
         }
      }
   document.addEventListener("click", function(e){
      if(e.target.classList.contains("eduprof-list-item-title")){
         currentElem = e.target.parentNode.children[1];
      }
      else if(e.target.hasAttribute("itemprop")){
         currentElem = e.target.parentNode.parentNode.parentNode.children[1];
      }
      else if(e.target.tagName == "path" || e.target.tagName == "circle"){
         currentElem = e.target.parentNode.parentNode.parentNode.parentNode.children[1];
      }
      else if(e.target.tagName == "svg"){
         currentElem = e.target.parentNode.parentNode.parentNode.children[1];
      }
      else{
         currentElem = null;
      }
      if(currentElem != null){
         currentElemToggle = currentElem.parentNode.children[0].children[1].children[0].children[1];
         if(currentElem.hasAttribute("style")){
            currentElem.removeAttribute("style");
            currentElem.setAttribute("area-expanded", "false");
            setTimeout(()=>{currentElemToggle.setAttribute("d", "M33 20L25 30L17 20")}, 500);
         }
         else{
            currentElem.setAttribute("area-expanded", "true");
            currentElemToggle.setAttribute("d", "M33 29L25 21L17 29");
            mb = 0;
            maxHeight = 0;
            mb += checkIndentation(currentElem);
            for(i=0; i<currentElem.childElementCount; i++){
               maxHeight += parseInt(currentElem.children[i].offsetHeight);
               mb += checkIndentation(currentElem.children[i]);
            }
            maxHeight += mb;
            currentElem.style.maxHeight = maxHeight + "px";
         }
      }
   });
   elem = document.querySelector(".vikon-text-block");
   elem.innerText = elem.innerText.replace("для", "Для");
   }
   if(window.location.pathname == "/sveden/education/poa/"){
      convertToDropdown();
      let elemTitle, elmeProp;
      item = document.querySelectorAll(".poa-list-item");
      elmeProp = document.querySelectorAll('div[itemprop="eduCode"]');
      for(i=0; i<item.length; i++){
         elemTitle = document.createElement("div");
         elemTitle.classList.add("poa-list-item-title");
         container = document.createElement("div");
         container.classList.add("poa-list-item-title-container");
         container.insertBefore(elmeProp[i], elemTitle.children[0]);      
         if(item[i].children[0].children[0] != undefined){
            container.insertBefore(item[i].children[0].children[0], container.children[1]); 
         }
         elemTitle.insertBefore(container, elemTitle.children[0]);
         item[i].insertBefore(elemTitle, item[i].children[0]);  
         if(item[i].innerText.includes("Отсутствует")){
            item[i].innerHTML = "Отсутствует" + item[i].innerHTML;
            item[i].children[0].style.display = "none";
            item[i].children[1].style.display = "none";
         }
      }
      addToggle();
      elem = document.querySelectorAll(".poa-list-item-container");
      for(i=0; i<elem.length; i++){
         item = document.createElement("b");
         item.innerHTML = "Уровень образования: ";
         elem[i].insertBefore(item, elem[i].children[0]);
         item = document.createElement("b");
         item.innerHTML = "Образовательная программа, направленность, профиль, шифр и наименование научной специальности: ";
         elem[i].insertBefore(item, elem[i].children[2]);
         item = document.createElement("b");
         item.innerHTML = "Наименование аккредитующей организации: ";
         elem[i].insertBefore(item, elem[i].children[4]);
         item = document.createElement("b");
         item.innerHTML = "Срок действия профессионально-общественной аккредитации (дата окончания действия свидетельства о профессионально-общественной аккредитации): ";
         elem[i].insertBefore(item, elem[i].children[6]);
         item = document.createElement("b");
         item.innerHTML = "Уровень аккредитации: ";
         elem[i].insertBefore(item, elem[i].children[8]);
      }
            
      item = document.querySelectorAll(".eduprof-list-item-title-container");
      for(i=0; i<item.length; i++){
         elemTitle = document.createElement("div");
         elemTitle.classList.add("poa-list-item-title");
         container = document.createElement("div");
         container.classList.add("poa-list-item-title-container");
         container.insertBefore(elmeProp[i], elemTitle.children[0]);      
         if(item[i].children[0].children[0] != undefined){
            container.insertBefore(item[i].children[0].children[0], container.children[1]); 
         }
         elemTitle.insertBefore(container, elemTitle.children[0]);
         item[i].insertBefore(elemTitle, item[i].children[0]);  
         if(item[i].innerText.includes("Отсутствует")){
            item[i].innerHTML = "Отсутствует" + item[i].innerHTML;
            item[i].children[0].style.display = "none";
            item[i].children[1].style.display = "none";
         }
      }  
      item = document.querySelectorAll(".poa-list-item-title-container");
      for(i=0; i<item.length; i++){
         if(item[i] != undefined){
            for(j=0; j<item[i].childElementCount; j++){
               if(item[i].children[j].classList.contains("hide")){
                  elem = item[i].parentNode.parentNode.children[2];
                  elem.parentNode.classList.add("hide");
                  pos = [].indexOf.call(elem.parentNode.parentNode.children, elem.parentNode);
                  check = 0;
                  while(check != 1){
                     if(item[pos].parentNode.parentNode.children[0].children[0].innerHTML.includes("hide")){
                        pos--;
                     }
                     else{
                        check++;
                     }
                  }
                  prevElem = item[pos].parentNode.parentNode.children[1];
                  if(prevElem != undefined){
                     for(k=0; k<elem.childElementCount; k++){
                        prevElem.insertBefore(elem.children[k], prevElem.children[prevElem.childElementCount]);
                        k--;
                     }
                  }
               }
            }
         }
      }
      document.addEventListener("click", function(e){
         if(e.target.parentNode.classList.contains("poa-list-item-title-container")){
            currentElem = e.target.parentNode.parentNode.parentNode.children[1];
         }
         else if(e.target.classList.contains("poa-list-item-title-container")){
            currentElem = e.target.parentNode.parentNode.children[1];
         }
         else if(e.target.classList.contains("poa-list-item-title")){
            currentElem = e.target.parentNode.children[1];
         }
         else if(e.target.classList.contains("anchor-link")){

         }
         else if(e.target.hasAttribute("itemprop")){
            currentElem = e.target.parentNode.parentNode.parentNode.children[1];
         }
         else if(e.target.tagName == "path" || e.target.tagName == "circle"){
            currentElem = e.target.parentNode.parentNode.parentNode.parentNode.children[1];
         }
         else if(e.target.tagName == "svg"){
            currentElem = e.target.parentNode.parentNode.parentNode.children[1];
         }
         else{
            currentElem = null;
         }
         if(currentElem != null){
            blockItemToggle = currentElem.parentNode.children[0].children[1].children[0].children[1];
            currentElemToggle = currentElem.parentNode.children[0].children[1].children[0].children[1];
            if(currentElem.hasAttribute("style")){
               currentElem.removeAttribute("style");
               currentElem.setAttribute("area-expanded", false);
               setTimeout(()=>{currentElemToggle.setAttribute("d", "M33 20L25 30L17 20")}, 500);
            }
            else{
               mb = 0;
               maxHeight = 0;
               mb += checkIndentation(currentElem);
               currentElemToggle.setAttribute("d", "M33 29L25 21L17 29");
               for(i=0; i<currentElem.childElementCount; i++){
                  mb += checkIndentation(currentElem.children[i]);
                  maxHeight += currentElem.children[i].offsetHeight;
               }
               currentElem.setAttribute("area-expanded", "true");
               maxHeight += mb;
               currentElem.style.maxHeight = maxHeight + "px";
            }
         }
      });
   }
   if(window.location.pathname == "/sveden/education/eduaccred/"){
      convertToDropdown();
      eduCode = document.querySelectorAll('div[itemprop="eduCode"]');
      let eduName = document.querySelectorAll('div[itemprop="eduName"]'), elem;
      item = document.querySelectorAll(".eduaccred-list-item");
      for(i=0; i<item.length; i++){
         containerTitle = document.createElement("div");
         containerTitle.classList.add("eduaccred-list-item-title-container");
         titleElem = document.createElement("div");
         titleElem.classList.add("eduaccred-list-item-title");
         containerTitle.insertBefore(eduCode[i], containerTitle.children[0]);
         containerTitle.insertBefore(eduName[i], containerTitle.children[0]);
         titleElem.insertBefore(containerTitle, titleElem.children[0]);
         item[i].insertBefore(titleElem, item[i].children[0]);
      }
      addToggle();
      pos = 0;
      item = document.querySelectorAll(".eduaccred-list-item-title-container");
      for(i=0; i<item.length; i++){
         if(item[i] != undefined){
            if(item[i].innerHTML.includes("hide")){
               elem = item[i].parentNode.parentNode;
               elem.classList.add("hide");
               pos = [].indexOf.call(elem.parentNode.children, elem);
               check = 0;              
               while(check != 1){
                  if(item[pos].innerHTML.includes("hide")){
                     pos--;
                  }
                  else{
                     check++;
                  }
               }
               elem = elem.children[1];
               prevElem = item[pos].parentNode.parentNode.children[1];
               for(j=0; j<elem.childElementCount; j++){
                  prevElem.insertBefore(elem.children[j], prevElem.children[prevElem.childElementCount]);
                  j--;
               }
            }
         }
      }
      elem = document.querySelectorAll('div[itemprop="eduProf"]');
      if(elem.length != 0){
         for(i=0; i<elem.length; i++){
            elemTitle = document.createElement("b");
            elemTitle.innerHTML = "Образовательная программа, направленность, профиль, шифр и наименование научной специальности";
            elem[i].parentNode.insertBefore(elemTitle, elem[i]);
         }
      }
      elem = document.querySelectorAll('div[itemprop="eduLevel"]');
      if(elem.length != 0){
         for(i=0; i<elem.length; i++){
            elemTitle = document.createElement("b");
            elemTitle.innerHTML = "Уровень образования";
            elem[i].parentNode.insertBefore(elemTitle, elem[i]);
         }
      }
      elem = document.querySelectorAll('div[itemprop="eduForm"]');
      if(elem.length != 0){
         for(i=0; i<elem.length; i++){
            elemTitle = document.createElement("b");
            elemTitle.innerHTML = "Форма обучения";
            elem[i].parentNode.insertBefore(elemTitle, elem[i]);
         }
      }
      elem = document.querySelectorAll('div[itemprop="learningTerm"]');
      if(elem.length != 0){
         for(i=0; i<elem.length; i++){
            elemTitle = document.createElement("b");
            elemTitle.innerHTML = "Нормативный срок обучения";
            elem[i].parentNode.insertBefore(elemTitle, elem[i]);
         }
      }
      elem = document.querySelectorAll('span[itemprop="dateEnd"]');
      if(elem.length != 0){
         for(i=0; i<elem.length; i++){
            elemTitle = document.createElement("b");
            elemTitle.innerHTML = "Наличие или отсутствие государственной аккредитации образовательной деятельности. Срок действия государственной аккредитации (при наличии государственной аккредитации) (дата окончания действия свидетельства о государственной аккредитации)";
            elem[i].parentNode.parentNode.insertBefore(elemTitle, elem[i].parentNode);
         }
      }
      elem = document.querySelectorAll('div[itemprop="language"]');
      if(elem.length != 0){
         for(i=0; i<elem.length; i++){
            elemTitle = document.createElement("b");
            elemTitle.innerHTML = "Языки, на которых осуществляется образование (обучение)";
            elem[i].parentNode.insertBefore(elemTitle, elem[i]);
         }
      }
      elem = document.querySelectorAll('div[itemprop="eduPred"]');
      if(elem.length != 0){
         for(i=0; i<elem.length; i++){
            elemTitle = document.createElement("b");
            elemTitle.innerHTML = "Учебные предметы, курсы, дисциплины (модули), предусмотренные соответствующей образовательной программой";
            elem[i].parentNode.insertBefore(elemTitle, elem[i]);
         }
      }
      elem = document.querySelectorAll('div[itemprop="eduPrac"]');
      if(elem.length != 0){
         for(i=0; i<elem.length; i++){
            elemTitle = document.createElement("b");
            elemTitle.innerHTML = "Практики, предусмотренные соответствующей образовательной программой";
            elem[i].parentNode.insertBefore(elemTitle, elem[i]);
         }
      }
      elem = document.querySelectorAll('div[itemprop="eduEl"]');
      if(elem.length != 0){
         for(i=0; i<elem.length; i++){
            elemTitle = document.createElement("b");
            elemTitle.innerHTML = "Использование при реализации образовательных программ электронного обучения и дистанционных образовательных технологий";
            elem[i].parentNode.insertBefore(elemTitle, elem[i]);
         }
      }
      document.addEventListener("keydown", function(k){
         if(k.key == "Escape"){
            if(document.querySelector("body").style.overflow == "hidden"){
               setTimeout(()=>{document.querySelector("body").style.overflow = "scroll";}, 500); 
            }
          }
      });
      document.addEventListener("click", function(e){
         if(e.target.classList.contains("showpart-btn-modal")){
            document.querySelector("body").style.overflow = "hidden";       
         }
         if(e.target.getAttribute("data-dismiss") == "modal" || e.target.parentNode.getAttribute("data-dismiss") == "modal"){
            document.querySelector("body").removeAttribute("style"); 
         }
         if(e.target.classList.contains("eduaccred-list-item-title")){
            currentElem = e.target.parentNode.children[1];
         }
         else if(e.target.hasAttribute("itemprop") || e.target.tagName == "svg"){
            currentElem = e.target.parentNode.parentNode.parentNode.children[1];
         }
         else if(e.target.classList.contains("anchor-link")){
            currentElem = e.target.parentNode.parentNode.parentNode.parentNode.children[1];
         }
         else if(e.target.tagName == "path" || e.target.tagName == "circle"){
            currentElem = e.target.parentNode.parentNode.parentNode.parentNode.children[1];
         }
         else if(e.target.classList.contains("eduaccred-list-item-title-container")){
            currentElem = e.target.parentNode.parentNode.children[1];
         }
         else{
            currentElem = null;
         }
         if(currentElem != null){
            blockItemToggle = currentElem.parentNode.children[0].children[1].children[0].children[1];
            currentElemToggle = currentElem.parentNode.children[0].children[1].children[0].children[1];
            if(currentElem.hasAttribute("style")){
               currentElem.removeAttribute("style");
               currentElem.setAttribute("area-expanded", false);
               setTimeout(()=>{currentElemToggle.setAttribute("d", "M33 20L25 30L17 20")}, 500);
            }
            else{
               mb = 0;
               maxHeight = 0;
               mb += checkIndentation(currentElem);
               currentElemToggle.setAttribute("d", "M33 29L25 21L17 29");
               for(i=0; i<currentElem.childElementCount; i++){
                  mb += checkIndentation(currentElem.children[i]);
                  maxHeight += currentElem.children[i].offsetHeight;
               }
               currentElem.setAttribute("area-expanded", "true");
               maxHeight += mb;
               currentElem.style.maxHeight = maxHeight + "px";
            }
         }
      });
   }
   if(window.location.pathname == "/sveden/education/eduop/"){
      convertToDropdown();
      item = document.querySelectorAll(".eduop-list-item");
      eduCode = document.querySelectorAll('div[itemprop="eduCode"]');
      eduName = document.querySelectorAll('div[itemprop="eduName"]');
      for(i=0; i<item.length; i++){
         elem = document.createElement("div");
         elem.classList.add("eduop-list-item-title");
         containerTitle = document.createElement("div");
         containerTitle.classList.add("eduop-list-item-title-container");
         if(!eduCode[i].innerHTML.includes("не предусмотрен") || !eduName[i].innerHTML.includes("не предусмотрен")){
            containerTitle.insertBefore(eduCode[i], containerTitle.children[containerTitle.childElementCount]);
            containerTitle.insertBefore(eduName[i], containerTitle.children[containerTitle.childElementCount]);
         }
         else{
           containerTitle.insertBefore(eduCode[i], containerTitle.children[containerTitle.childElementCount]);
            containerTitle.innerHTML = item[i].querySelector('div[itemprop="eduProf"]').innerHTML;
         }
         elem.insertBefore(containerTitle, elem.children[0]);
         item[i].insertBefore(elem, item[i].children[0]);
      }
      addToggle();
      item = document.querySelectorAll('div[itemprop="eduLevel"]');
      for(i=0; i<item.length; i++){
         elemTitle = document.createElement("b");
         elemTitle.innerHTML = "Уровень образования";
         item[i].parentNode.insertBefore(elemTitle, item[i]);
      }
      item = document.querySelectorAll('div[itemprop="eduProf"]');
      for(i=0; i<item.length; i++){
         elemTitle = document.createElement("b");
         elemTitle.innerHTML = "Образовательная программа, направленность, профиль, шифр и наименование научной специальности";
         item[i].parentNode.insertBefore(elemTitle, item[i]);
      }
      item = document.querySelectorAll('div[itemprop="eduForm"]');
      for(i=0; i<item.length; i++){
         elemTitle = document.createElement("b");
         elemTitle.innerHTML = "Реализуемые формы обучения";
         item[i].parentNode.insertBefore(elemTitle, item[i]);
      }
      item = document.querySelectorAll('div[itemprop="opMain"]');
      for(i=0; i<item.length; i++){
         elemTitle = document.createElement("b");
         elemTitle.innerHTML = "Описание образовательной программы";
         item[i].parentNode.insertBefore(elemTitle, item[i]);
      }
      item = document.querySelectorAll('div[itemprop="educationPlan"]');
      for(i=0; i<item.length; i++){
         elemTitle = document.createElement("b");
         elemTitle.innerHTML = "Учебный план";
         item[i].parentNode.insertBefore(elemTitle, item[i]);
      }
      item = document.querySelectorAll('div[itemprop="educationRpd"]');
      for(i=0; i<item.length; i++){
         elemTitle = document.createElement("b");
         elemTitle.innerHTML = "Рабочие программы дисциплин";
         item[i].parentNode.insertBefore(elemTitle, item[i]);
      }
      item = document.querySelectorAll('div[itemprop="educationAnnotation"]');
      for(i=0; i<item.length; i++){
         elemTitle = document.createElement("b");
         elemTitle.innerHTML = "Аннотации к рабочим программам дисциплин";
         item[i].parentNode.insertBefore(elemTitle, item[i]);
      }
      item = document.querySelectorAll('div[itemprop="eduPr"]');
      for(i=0; i<item.length; i++){
         elemTitle = document.createElement("b");
         elemTitle.innerHTML = "Рабочие программы практик";
         item[i].parentNode.insertBefore(elemTitle, item[i]);
      }
      item = document.querySelectorAll('div[itemprop="educationShedule"]');
      for(i=0; i<item.length; i++){
         elemTitle = document.createElement("b");
         elemTitle.innerHTML = "Календарный учебный график";
         item[i].parentNode.insertBefore(elemTitle, item[i]);
      }
      item = document.querySelectorAll('.eduop-list-item-container');
      for(i=0; i<item.length; i++){
         elemTitle = document.createElement("b");
         elemTitle.innerHTML = "Методические и иные документы";
         item[i].insertBefore(elemTitle, item[i].children[item[i].childElementCount - 1]);
      }
      document.addEventListener("keydown", function(k){
         if(k.key == "Escape"){
            if(document.querySelector("body").style.overflow == "hidden"){
               setTimeout(()=>{document.querySelector("body").style.overflow = "scroll";}, 500); 
            }
          }
      });
      item = document.querySelectorAll(".eduop-list-item-title-container");
      for(i=0; i<item.length; i++){
         if(item[i] != undefined){
            for(j=0; j<item[i].childElementCount; j++){
               if(item[i].children[j].classList.contains("hide")){
                  elem = item[i].parentNode.parentNode.children[1];
                  elem.parentNode.classList.add("hide");
                  pos = [].indexOf.call(elem.parentNode.parentNode.children, elem.parentNode);
                  check = 0;
                  while(check != 1){
                     if(item[pos].parentNode.parentNode.children[0].children[0].innerHTML.includes("hide")){
                        pos--;
                     }
                     else{
                        check++;
                     }
                  }
                  prevElem = item[pos].parentNode.parentNode.children[1];
                  if(prevElem != undefined){
                     for(k=0; k<elem.childElementCount; k++){
                        prevElem.insertBefore(elem.children[k], prevElem.children[prevElem.childElementCount]);
                        k--;
                     }
                  }
               }
            }
         }
      }
      document.addEventListener("click", function(e){
         if(e.target.classList.contains("showpart-btn-modal")){
            document.querySelector("body").style.overflow = "hidden";   
            elemTitle = e.target.parentNode.parentNode.parentNode.children[0].children[0].children[1];
            if(elemTitle == undefined){
               elemTitle = e.target.parentNode.parentNode.parentNode.children[0].children[0];
            }
            modal = document.querySelector(".modal-title");
            modal.innerHTML = modal.innerHTML.replace(elemTitle.innerText, elemTitle.innerText + "<br><br>");
         }
         if(e.target.getAttribute("data-dismiss") == "modal" || e.target.parentNode.getAttribute("data-dismiss") == "modal"){
            document.querySelector("body").removeAttribute("style"); 
         }
         if(e.target.classList.contains("eduop-list-item-title")){
            currentElem = e.target.parentNode.children[1];
         }
         else if(e.target.hasAttribute("itemprop") || e.target.tagName == "svg"){
            currentElem = e.target.parentNode.parentNode.parentNode.children[1];
         }
         else if(e.target.classList.contains("anchor-link")){
            currentElem = e.target.parentNode.parentNode.parentNode.parentNode.children[1];
         }
         else if(e.target.tagName == "path" || e.target.tagName == "circle"){
            currentElem = e.target.parentNode.parentNode.parentNode.parentNode.children[1];
         }
         else if(e.target.classList.contains("eduop-list-item-title-container")){
            currentElem = e.target.parentNode.parentNode.children[1];
         }
         else{
            currentElem = null;
         }
         if(currentElem != null){
            blockItemToggle = currentElem.parentNode.children[0].children[1].children[0].children[1];
            currentElemToggle = currentElem.parentNode.children[0].children[1].children[0].children[1];
            if(currentElem.hasAttribute("style")){
               currentElem.removeAttribute("style");
               currentElem.setAttribute("area-expanded", false);
               setTimeout(()=>{currentElemToggle.setAttribute("d", "M33 20L25 30L17 20")}, 500);
            }
            else{
               mb = 0;
               maxHeight = 0;
               mb += checkIndentation(currentElem);
               currentElemToggle.setAttribute("d", "M33 29L25 21L17 29");
               for(i=0; i<currentElem.childElementCount; i++){
                  mb += checkIndentation(currentElem.children[i]);
                  maxHeight += currentElem.children[i].offsetHeight;
               }
               currentElem.setAttribute("area-expanded", "true");
               maxHeight += mb;
               currentElem.style.maxHeight = maxHeight + "px";
            }
         }
      });
   }
   if(window.location.pathname == "/sveden/education/perevod/"){
      convertToDropdown();
      item = document.querySelectorAll(".perevod-list-item");
      for(i=0; i<item.length; i++){
         if(!item[i].innerHTML.includes("hide")){
            titleElem = document.createElement("div");
            titleElem.classList.add("perevod-list-item-title");
            containerTitle = document.createElement("div");
            containerTitle.classList.add("perevod-list-item-title-container");
            titleElem.insertBefore(containerTitle, titleElem.children[titleElem.childElementCount]);
            eduCode = item[i].querySelector('div[itemprop="eduCode"]');
            containerTitle.insertBefore(eduCode, containerTitle.children[containerTitle.childElementCount]);
            eduName = item[i].querySelector('div[itemprop="eduName"]');
            containerTitle.insertBefore(eduName, containerTitle.children[containerTitle.childElementCount]);
            item[i].insertBefore(titleElem, item[i].children[0]);
         }
         else{
            container = item[i].querySelector(".perevod-list-item-container");
            prevElem = item[i-1].querySelector(".perevod-list-item-container");
            for(j=0; j<item[i].childElementCount; j++){
               if(item[i].children[j].classList.contains("perevod-list-item-container")){
                  for(k=0; k<item[i].children[j].childElementCount; k++){
                     prevElem.insertBefore(item[i].children[j].children[k], prevElem.children[prevElem.childElementCount]);
                     k--;
                  }
               }
               else{
                  prevElem.insertBefore(item[i].children[j], prevElem.children[prevElem.childElementCount]);
                  j--;
               }
            }
            item[i].classList.add("hide");
         }
      }
      item = document.querySelectorAll('div[itemprop="eduLevel"]');
      for(i=0; i<item.length; i++){
         titleElem = document.createElement("b");
         titleElem.innerHTML = "Уровень образования:";
         if(!item[i].classList.contains("hide")){
            item[i].parentNode.insertBefore(titleElem, item[i]);
         }
      }
      item = document.querySelectorAll('div[itemprop="eduForm"]');
      for(i=0; i<item.length; i++){
         titleElem = document.createElement("b");
         titleElem.innerHTML = "Форма обучения";
         item[i].parentNode.insertBefore(titleElem, item[i]);
      }
      item = document.querySelectorAll('div[itemprop="numberOut"]');
      for(i=0; i<item.length; i++){
         titleElem = document.createElement("b");
         titleElem.innerHTML = "Численность обучающихся, переведенных в другие образовательные организации";
         item[i].parentNode.insertBefore(titleElem, item[i]);
      }
      item = document.querySelectorAll('div[itemprop="numberTo"]');
      for(i=0; i<item.length; i++){
         titleElem = document.createElement("b");
         titleElem.innerHTML = "Численность обучающихся, переведенных из других образовательных организаций";
         item[i].parentNode.insertBefore(titleElem, item[i]);
      }
      item = document.querySelectorAll('div[itemprop="numberRes"]');
      for(i=0; i<item.length; i++){
         titleElem = document.createElement("b");
         titleElem.innerHTML = "Численность восстановленных обучающихся";
         item[i].parentNode.insertBefore(titleElem, item[i]);
      }
      item = document.querySelectorAll('div[itemprop="numberExp"]');
      for(i=0; i<item.length; i++){
         titleElem = document.createElement("b");
         titleElem.innerHTML = "Численность отчисленных обучающихся";
         item[i].parentNode.insertBefore(titleElem, item[i]);
      }
      addToggle();
      document.addEventListener("click", function(e){
         if(e.target.classList.contains("perevod-list-item-title-container")){
            currentElem = e.target.parentNode.parentNode.children[1];
         }
         else if(e.target.classList.contains("perevod-list-item-title")){
            currentElem = e.target.parentNode.children[1];
         }
         else if(e.target.hasAttribute("itemprop") || e.target.tagName == "svg"){
            currentElem = e.target.parentNode.parentNode.parentNode.children[1];
         }
         else if(e.target.classList.contains("anchor-link")){
            currentElem = e.target.parentNode.parentNode.parentNode.parentNode.children[1];
         }
         else if(e.target.tagName == "path" || e.target.tagName == "circle"){
            currentElem = e.target.parentNode.parentNode.parentNode.parentNode.children[1];
         }
         else if(e.target.classList.contains("eduop-list-item-title-container")){
            currentElem = e.target.parentNode.parentNode.children[1];
         }
         else{
            currentElem = null;
         }
         if(currentElem != null){
            blockItemToggle = currentElem.parentNode.children[0].children[1].children[0].children[1];
            currentElemToggle = currentElem.parentNode.children[0].children[1].children[0].children[1];
            if(currentElem.hasAttribute("style")){
               currentElem.removeAttribute("style");
               currentElem.setAttribute("area-expanded", false);
               setTimeout(()=>{currentElemToggle.setAttribute("d", "M33 20L25 30L17 20")}, 500);
            }
            else{
               mb = 0;
               maxHeight = 0;
               mb += checkIndentation(currentElem);
               currentElemToggle.setAttribute("d", "M33 29L25 21L17 29");
               for(i=0; i<currentElem.childElementCount; i++){
                  mb += checkIndentation(currentElem.children[i]);
                  maxHeight += currentElem.children[i].offsetHeight;
               }
               currentElem.setAttribute("area-expanded", "true");
               maxHeight += mb;
               currentElem.style.maxHeight = maxHeight + "px";
            }
         }
      });
   }
   if(window.location.pathname == "/sveden/education/study/"){
      let tableHead, header, item, spo = [], bach = [], mag =[], asp = [], spec = [],  dpo = [], tableContainer;
      tableHead = document.querySelector("thead");
      item = document.querySelectorAll('td[itemprop="eduCode"]');
      tableContainer = document.querySelector(".vikon-responsive-table");
      for(i=0; i<item.length; i++){
         if(item[i] != undefined){
            if(item[i].innerHTML.includes(".02.")){
               spo[i] = item[i].parentNode;
            }
            else if(item[i].innerHTML.includes(".03.")){
               bach[i] = item[i].parentNode;
            }
            else if(item[i].innerHTML.includes(".04.")){
               mag[i] = item[i].parentNode;
            }
            else if(item[i].innerHTML.includes(".05.")){
               spec[i] = item[i].parentNode;

            }
            else if(item[i].innerHTML.includes("не предусмотрен")){
               dpo[i] = item[i].parentNode;
            }
            else{
               asp[i] = item[i].parentNode;
            }
         }
      }
      tableContainer = document.querySelector(".vikon-responsive-table");
      tableContainer.removeChild(tableContainer.children[0]);
      item = document.createElement("table");
      tableBody = document.createElement("tbody");
      item.insertBefore(tableBody, item.children[0]);
      for(i=0; i<spo.length; i++){
         if(spo[i] != undefined){
            tableBody.innerHTML += spo[i].innerHTML;
         }
      }
      tableContainer.insertBefore(item, tableContainer.children[tableContainer.childElementCount]);
      item = document.createElement("table");
      tableBody = document.createElement("tbody");
      item.insertBefore(tableBody, item.children[0]);
      for(i=0; i<bach.length; i++){
         if(bach[i] != undefined){
            tableBody.innerHTML += bach[i].innerHTML;
         }
      }
      tableContainer.insertBefore(item, tableContainer.children[tableContainer.childElementCount]);
      item = document.createElement("table");
      tableBody = document.createElement("tbody");
      item.insertBefore(tableBody, item.children[0]);
      for(i=0; i<mag.length; i++){
         if(mag[i] != undefined){
            tableBody.innerHTML += mag[i].innerHTML;
         }
      }
      tableContainer.insertBefore(item, tableContainer.children[tableContainer.childElementCount]);        
      item = document.createElement("table");
      tableBody = document.createElement("tbody");
      item.insertBefore(tableBody, item.children[0]);
      for(i=0; i<spec.length; i++){
         if(spec[i] != undefined){
            tableBody.innerHTML += spec[i].innerHTML;
         }
      }
      tableContainer.insertBefore(item, tableContainer.children[tableContainer.childElementCount]);            
      item = document.createElement("table");
      tableBody = document.createElement("tbody");
      item.insertBefore(tableBody, item.children[0]);
      for(i=0; i<asp.length; i++){
         if(asp[i] != undefined){
            tableBody.innerHTML += asp[i].innerHTML;
         }
      }
      tableContainer.insertBefore(item, tableContainer.children[tableContainer.childElementCount]);                        
      item = document.createElement("table");
      tableBody = document.createElement("tbody");
      item.insertBefore(tableBody, item.children[0]);
      for(i=0; i<dpo.length; i++){
         if(dpo[i] != undefined){
            tableBody.innerHTML += dpo[i].innerHTML;
         }
      }
      tableContainer.insertBefore(item, tableContainer.children[tableContainer.childElementCount]);
      table = document.querySelectorAll("table");
      parentElem = document.querySelector("table").parentNode;
      console.log(parentElem);
      for(i=0; i<table.length; i++){
         header = document.createElement("thead");
         header.innerHTML = tableHead.innerHTML;
         table[i].insertBefore(header, table[i].children[0]);
         elem = document.createElement("div");
         elem.classList.add("study-item");
         elemTitle = document.createElement("div");
         elemTitle.classList.add("study-item-title");
         titleContainer = document.createElement("div");
         titleContainer.classList.add("study-item-title-text");
         elemTitle.insertBefore(titleContainer, elemTitle.children[elemTitle.childElementCount]);
         container = document.createElement("div");
         container.classList.add("study-item-container");
         elem.insertBefore(elemTitle, elem.children[elem.childElementCount]);
         elem.insertBefore(container, elem.children[elem.childElementCount]);
         parentElem.insertBefore(elem, parentElem.children[parentElem.childElementCount]);
         container.insertBefore(table[i], container.children[0]);
         switch(i){
            case 0:
               titleContainer.innerHTML = "Среднее профессиональное образование";
               break;
            case 1:
               titleContainer.innerHTML = "Бакалавриат";
               break;
            case 2:
               titleContainer.innerHTML = "Магистратура";
               break;
            case 3:
               titleContainer.innerHTML = "Специалитет";
               break;
            case 4:
               titleContainer.innerHTML = "Аспирантура";
               break;
            case 5:
               titleContainer.innerHTML = "Дополнительное профессиональное образование";
               break;
         }
      }
      td = document.querySelectorAll("td");
      for(i=0; i< td.length; i++){
         if(!td[i].classList.contains("text-vertical-center")){
            td[i].classList.add("text-vertical-center");
         }
      }
      item = document.querySelectorAll(".vikon-title-block");
      item[1].outerHTML = "<div class=" + item[1].classList + ">" + item[1].innerHTML + "</div>";
      addToggle();
      document.addEventListener("click", function(e){
         if(e.target.classList.contains("study-item-title")){
            currentElem = e.target.parentNode.children[1];
         }
         else if(e.target.classList.contains("study-item-title-text")){
            currentElem = e.target.parentNode.parentNode.children[1];
         }
         else if(e.target.tagName == "path" || e.target.tagName == "circle"){
            currentElem = e.target.parentNode.parentNode.parentNode.parentNode.children[1];
         }
         else if(e.target.tagName == "svg"){
            currentElem = e.target.parentNode.parentNode.parentNode.children[1];
         }
         else{
            currentElem = null;
         }
         if(currentElem != null){
            blockItemToggle = currentElem.parentNode.children[0].children[1].children[0].children[1];
            currentElemToggle = currentElem.parentNode.children[0].children[1].children[0].children[1];
            if(currentElem.hasAttribute("style")){
               currentElem.removeAttribute("style");
               currentElem.setAttribute("area-expanded", false);
               setTimeout(()=>{currentElemToggle.setAttribute("d", "M33 20L25 30L17 20")}, 1000);
            }
            else{
               mb = 0;
               maxHeight = 0;
               mb += checkIndentation(currentElem);
               currentElemToggle.setAttribute("d", "M33 29L25 21L17 29");
               for(i=0; i<currentElem.childElementCount; i++){
                  mb += checkIndentation(currentElem.children[i]);
                  maxHeight += currentElem.children[i].offsetHeight;
               }
               currentElem.setAttribute("area-expanded", "true");
               maxHeight += mb;
               currentElem.style.maxHeight = maxHeight + "px";
               setTimeout(()=>{currentElem.style.overflow = "visible"}, 500);
            }
         }
      });
   }
   if(window.location.pathname == "/sveden/vacant/"){
      let bachelor = [], magister = [], spo = [], asp = [], spec = [], item, tableHead, table, tableBody, tableContainer, titleContainer;
      tableHead = document.querySelector("thead");
      item = document.querySelectorAll('td[itemprop="eduCode"]');
      tableContainer = document.querySelector(".vikon-responsive-table");
      for(i=0; i<item.length; i++){
         if(item[i] != undefined){
            if(item[i].innerHTML.includes(".02.")){
               spo[i] = item[i].parentNode;
            }
            else if(item[i].innerHTML.includes(".03.")){
               bachelor[i] = item[i].parentNode;
            }
            else if(item[i].innerHTML.includes(".04.")){
               magister[i] = item[i].parentNode;
            }
            else if(item[i].innerHTML.includes(".05.")){
               spec[i] = item[i].parentNode;
            }
            else{
               asp[i] = item[i].parentNode;
            }
         }
      }
      tableContainer.removeChild(tableContainer.children[0]);
      table = document.createElement("table");
      tableBody = document.createElement("tbody");
      for(i=0; i<spo.length; i++){
         tableBody.insertBefore(spo[i], tableBody.children[tableBody.childElementCount]);
      }
      table.insertBefore(tableBody, table.children[table.childElementCount]);
      tableContainer.insertBefore(table, tableContainer.children[tableContainer.childElementCount]);
      table = document.createElement("table");
      tableBody = document.createElement("tbody");
      for(i=0; i<bachelor.length; i++){
         if(bachelor[i] != undefined){
            tableBody.insertBefore(bachelor[i], tableBody.children[tableBody.childElementCount]);
         }
      }
      table.insertBefore(tableBody, table.children[table.childElementCount]);
      tableContainer.insertBefore(table, tableContainer.children[tableContainer.childElementCount]);
      table = document.createElement("table");
      tableBody = document.createElement("tbody");
      for(i=0; i<magister.length; i++){
         if(magister[i] != undefined){
            tableBody.insertBefore(magister[i], tableBody.children[tableBody.childElementCount]);
         }
      }
      table.insertBefore(tableBody, table.children[table.childElementCount]);
      tableContainer.insertBefore(table, tableContainer.children[tableContainer.childElementCount]);

      table = document.createElement("table");
      tableBody = document.createElement("tbody");
      for(i=0; i<spec.length; i++){
         if(spec[i] != undefined){
            tableBody.insertBefore(spec[i], tableBody.children[tableBody.childElementCount]);
         }
      }
      table.insertBefore(tableBody, table.children[table.childElementCount]);
      tableContainer.insertBefore(table, tableContainer.children[tableContainer.childElementCount]);
      table = document.createElement("table");
      tableBody = document.createElement("tbody");
      for(i=0; i<asp.length; i++){
         if(asp[i] != undefined){
            tableBody.insertBefore(asp[i], tableBody.children[tableBody.childElementCount]);
         }
      }
      table.insertBefore(tableBody, table.children[table.childElementCount]);
      tableContainer.insertBefore(table, tableContainer.children[tableContainer.childElementCount]);
      table = document.querySelectorAll("table");
      for(i=0; i<table.length; i++){
         let header = document.createElement("thead");
         header.innerHTML = tableHead.innerHTML;
         table[i].insertAdjacentElement("afterbegin", header);
         item = document.createElement("div");
         item.classList.add("vacant-item");
         container = document.createElement("div");
         container.classList.add("vacant-item-container");
         titleElem = document.createElement("div");
         titleElem.classList.add("vacant-item-title");
         titleContainer = document.createElement("div");
         titleContainer.classList.add("vacant-item-title-container");
         titleElem.insertBefore(titleContainer, titleElem.children[titleElem.childElementCount]);
         item.insertBefore(titleElem, item.children[item.childElementCount]);
         item.insertBefore(container, item.children[item.childElementCount]);
         parentElem = table[i].parentNode.parentNode.parentNode;
         container.insertBefore(table[i], container.children[container.childElementCount]);
         parentElem.insertBefore(item, parentElem.children[parentElem.childElementCount]);
         switch(i){
            case 0: 
               titleContainer.innerHTML = "Среднее профессиональное образование";
               break;   
            case 1: 
               titleContainer.innerHTML = "Бакалвриат";    
               break;
            case 2: 
               titleContainer.innerHTML = "Магистратура";      
               break;
            case 3: 
               titleContainer.innerHTML = "Специалитет";    
               break;
            case 4: 
               titleContainer.innerHTML = "Аспирантура";    
               break;
         }
      }
      addToggle();
      document.addEventListener("click", function(e){
         if(e.target.classList.contains("vacant-item-title")){
            currentElem = e.target.parentNode.children[1];
         }
         else if(e.target.classList.contains("vacant-item-title-container")){
            currentElem = e.target.parentNode.parentNode.children[1];
         }
         else if(e.target.tagName == "path" || e.target.tagName == "circle"){
            currentElem = e.target.parentNode.parentNode.parentNode.parentNode.children[1];
         }
         else if(e.target.tagName == "svg"){
            currentElem = e.target.parentNode.parentNode.parentNode.children[1];
         }
         else{
            currentElem = null;
         }
         if(currentElem != null){
            blockItemToggle = currentElem.parentNode.children[0].children[1].children[0].children[1];
            currentElemToggle = currentElem.parentNode.children[0].children[1].children[0].children[1];
            if(currentElem.hasAttribute("style")){
               currentElem.removeAttribute("style");
               currentElem.setAttribute("area-expanded", false);
               setTimeout(()=>{currentElemToggle.setAttribute("d", "M33 20L25 30L17 20")}, 1000);
            }
            else{
               mb = 0;
               maxHeight = 0;
               mb += checkIndentation(currentElem);
               currentElemToggle.setAttribute("d", "M33 29L25 21L17 29");
               for(i=0; i<currentElem.childElementCount; i++){
                  mb += checkIndentation(currentElem.children[i]);
                  maxHeight += currentElem.children[i].offsetHeight;
               }
               currentElem.setAttribute("area-expanded", "true");
               maxHeight += mb;
               currentElem.style.maxHeight = maxHeight + "px";
               setTimeout(()=>{currentElem.style.overflow = "visible"}, 500);
            }
         }
      });
   }
});