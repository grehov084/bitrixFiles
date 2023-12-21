<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

use Bitrix\Main\Loader;
use Bitrix\Iblock;


/**
 * Данный класс используется для дополнения дефолтной логики news.detail
 * На данной странице в инфоблоке передаются свойства, которые в значении имеют идентификатор(ы) на другой(ие)
 * инфоблоки, свойства которых необходимо отобразить. Этим и занимается данный класс.
 */
class CafedraNewsDetail extends \CBitrixComponent
{
    public function executeComponent()
    {
        parent::executeComponent();


        if (!Loader::includeModule("iblock")) {
            ShowError("Не установлен модуль iblock");
            return;
        }



        foreach ($this->arResult["PROPERTIES"] as $propCode => &$arProp) {
            if ($arProp["PROPERTY_TYPE"] !== "E") {
                continue;
            }
            $arSelect = Array("ID", "IBLOCK_ID", "NAME","PROPERTY_*", "PREVIEW_PICTURE");
//            $arFilter = Array("IBLOCK_ID"=>IntVal(4), "ID" => IntVal($linkedElementId), "ACTIVE_DATE"=>"Y", "ACTIVE"=>"Y");

            if($arProp["MULTIPLE"] == "Y") {
                $arProp["LINKED_IBLOCK_ELEMENTS"] = array();
                foreach ($arProp["VALUE"] as $propIdx => $propValue ){

                    $arFilter = Array("IBLOCK_ID"=>IntVal(4), "ID" => IntVal($propValue), "ACTIVE_DATE"=>"Y", "ACTIVE"=>"Y");
                    $res = CIBlockElement::GetList(Array(), $arFilter, false, Array("nPageSize"=>1), $arSelect);
                    while($ob = $res->GetNextElement()){
                        $element = $ob->GetFields();
                        $element["PROPERTIES"] = $ob->GetProperties();
                        $element["PREVIEW_PICTURE"] = CFile::GetFileArray($element["PREVIEW_PICTURE"]);
                        $arProp["LINKED_IBLOCK_ELEMENTS"][$propIdx] = $element;
                    }
                }
            } else {
                $linkedElementId = $arProp["VALUE"];
                $arFilter = Array("IBLOCK_ID"=>IntVal(4), "ID" => IntVal($linkedElementId), "ACTIVE_DATE"=>"Y", "ACTIVE"=>"Y");
                $res = CIBlockElement::GetList(Array(), $arFilter, false, Array("nPageSize"=>1), $arSelect);
                while($ob = $res->GetNextElement()){
                    $element = $ob->GetFields();
                    $element["PROPERTIES"] = $ob->GetProperties();
                    $element["PREVIEW_PICTURE"] = CFile::GetFileArray($element["PREVIEW_PICTURE"]);
                    $arProp["LINKED_IBLOCK_ELEMENT"] = $element;
                }
            }




//            $res = CIBlockElement::GetByID($linkedElementId);
//
//
//            // получим информацию об элементе
//            if ($linkedEl = $res->GetNext()) {
////                $linkedEl["DETAIL_PICTURE"] = CFile::GetFileArray($linkedEl["DETAIL_PICTURE"]);
//                $linkedEl["PREVIEW_PICTURE"] = CFile::GetFileArray($linkedEl["PREVIEW_PICTURE"]);
//                $arProp["LINKED_IBLOCK_ELEMENT"] = $linkedEl;
//            }

        }

        // добавляем новую логику
        $this->arResult["MY_CUSTOM_FIELD"] = "Hello, World!";

        $this->includeComponentTemplate();
    }
}