<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<? $this->setFrameMode(true); ?>

<section>
    <div class="container">
        <h1><?= $arResult["NAME"] ?></h1>
        <div class="news-publish-date">Дата публикации: <?=$arResult["DISPLAY_ACTIVE_FROM"]?></div>
        <div class="news-detail-container">

            <? if ($arParams["DISPLAY_PICTURE"] != "N" && is_array($arResult["DETAIL_PICTURE"])): ?>
                <?
                $file = CFile::ResizeImageGet($arResult["DETAIL_PICTURE"], array(
                    'width' => 300,
                    'height' => 400
                ), BX_RESIZE_IMAGE_PROPORTIONAL, true);
                ?>
                <img
                        class="detail_picture"
                        style="float: left; margin: 0 20px 20px 0;"
                        src="<?= $file["src"] ?>"
                        width="<?= $file["width"] ?>"
                        alt="<?= $arResult["DETAIL_PICTURE"]["ALT"] ?>"
                        title="<?= $arResult["DETAIL_PICTURE"]["TITLE"] ?>"
                />
            <? endif ?>
            <p>
                <? if (strlen($arResult["DETAIL_TEXT"]) > 0): ?>
                    <? echo $arResult["DETAIL_TEXT"]; ?>
                <? else: ?>
                    <? echo $arResult["PREVIEW_TEXT"]; ?>
                <? endif ?>
            </p>
            <br style="clear: both">

            <? if ($arResult["TAGS"] != ""): ?>
                <? $arTags = explode(",", $arResult["TAGS"]); ?>
                <p>
                    <? foreach ($arTags as $value): ?>
                        <a href="/news/?tag=<?= $value ?>" style="padding-right: 10px"><?= $value ?></a>
                    <? endforeach ?>
                </p>
            <? endif ?>
            <? if($arResult["DISPLAY_PROPERTIES"]["PHOTO_MATERIAL"]["VALUE"]  == "Y"){?>
                    <div class="section-news-photo-material">
                        Фотоматериал подготовлен <a href="#">Лабораторией медиаресурсов и технологий</a>
                    </div>
               <? } ?>
               <div class="section-news-material">
                Информация подготовлена <a href="">Центром медиакоммунимкаций и маркетинга</a> 
               </div>
        </div>
    </div>
</section>
