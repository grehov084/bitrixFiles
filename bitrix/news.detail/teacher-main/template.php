<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */

use Bitrix\Main\Type\DateTime;

$this->setFrameMode(true);
?><section class="teacher">
    <div class="container">
        <div class="row">
            <div class="col-auto">
                <div class="teacher-photo">
                    <?
                    if(!empty($arResult['DETAIL_PICTURE'])){
                        ?>
                        <div><img src="<?=$arResult['DETAIL_PICTURE']['SRC']?>" alt="<?=$arResult['DETAIL_PICTURE']['ALT']?>"></div>
                        <?
                    }
                    else {
                        ?>
                        <div><img src="<?=SITE_TEMPLATE_PATH?>/assets/images/cdoimk-empty.png" ></div>
                        <?
                    }
                    ?>
                </div>
            </div>
            <div class="col-sm col-xl-8">
                <div class="teacher-main">
                     <h1 class="teacher-name"><?=$arResult["NAME"]?></h1>
                    <p><?=$arResult["PROPERTIES"]["POSITION"]["VALUE"]?><br><?=$arResult["PROPERTIES"]["POSITION_DOP"]["~VALUE"]["TEXT"]?></p>
                    <?
                    if($arResult["PROPERTIES"]["TUTOR_ACTIVITY"]["VALUE"]){
                        ?>
                        <div class="teacher-title"><?=$arResult["PROPERTIES"]["TUTOR_ACTIVITY"]["NAME"]?>:</div>
                        <?=$arResult["PROPERTIES"]["TUTOR_ACTIVITY"]["~VALUE"]["TEXT"]?>
                        <?
                    }
                    ?>
                    <?
                    if($arResult["PROPERTIES"]["EDUCATION"]["VALUE"]){
                        ?>
                        <div class="teacher-title"><?=$arResult["PROPERTIES"]["EDUCATION"]["NAME"]?>:</div>
					<p><?=$arResult["PROPERTIES"]["EDUCATION"]["~VALUE"]["TEXT"]?></p>
                        <?
                    }
                    ?>
                    <?
                    if($arResult["PROPERTIES"]["DEGREE"]["VALUE"]){
                        ?>
					<div class="teacher-title" style="display: flex; align-items: center" ><p style="font-weight: bold; float: left;"><?=$arResult["PROPERTIES"]["DEGREE"]["NAME"]?></p>:<p style="margin-top: 0; margin-left: 7px"><?=$arResult["PROPERTIES"]["DEGREE"]["VALUE"]?></p></div>
                        <?
                    }
                    ?>
                    <?
                    if($arResult["PROPERTIES"]["ST_PRO"]["VALUE"]){
                        ?>
					<div class="teacher-title" style="display: flex; align-items: center"><p style="font-weight: bold; float: left;"><?=$arResult["PROPERTIES"]["ST_PRO"]["NAME"]?>:</p><p style="margin-top: 0; margin-left: 7px"><?=$arResult["PROPERTIES"]["ST_PRO"]["VALUE"]?></p> </div>
					<p></p>
                        <?
                    }
                    ?>
                    <?
                    if($arResult["PROPERTIES"]["EXPERIENCE_DOP"]["VALUE"]){
                        ?>
                        <div class="teacher-title"><?=$arResult["PROPERTIES"]["EXPERIENCE_DOP"]["NAME"]?>:</div>
                        <p><?=$arResult["PROPERTIES"]["EXPERIENCE_DOP"]["VALUE"]?></p>
                        <?
                    }
                    ?>
                    <?
                    if($arResult["PROPERTIES"]["DEVELOPMENT"]["~VALUE"]["TEXT"]){
                        ?>
                        <div class="teacher-title"><?=$arResult["PROPERTIES"]["DEVELOPMENT"]["NAME"]?>:</div>
                        <?=$arResult["PROPERTIES"]["DEVELOPMENT"]["~VALUE"]["TEXT"]?>
                        <?
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>