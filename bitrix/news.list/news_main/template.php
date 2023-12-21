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
$this->setFrameMode(true);
$check = 0;
//$this->addExternalCss("/local/templates/main2/components/bitrix/news.list/news_main/style.css");
?>

<section class="section-news">
    <div class="container" style="display: grid;">
		<div class="section-top">
        <h2 class="section-title">
            <?= $arParams["DISPLAY_SECTION_NAME"] ?>
        </h2>
            <div class="section-news-all order-md-1"><a class="title-link"
                                                        href="/news/"><span>Все <?=$arParams["DISPLAY_SECTION_NAME"];?></span>

                </a></div>
		</div>
		<div class="section-news-main">
            <div class="section-news-list">
                <div class="section-news-row section-news-row--main">
                    <?foreach($arResult["ITEMS"] as $arItem):
						$arTags = explode(",", $arItem["TAGS"]);?>
						<? if(intval($arItem["DISPLAY_PROPERTIES"]["MAIN_NEWS"]["VALUE_XML_ID"]) == 1 && check == 0){
								$arParams["NEWS_COUNT"] = 5;
							?>
							<div class="section-news--main">
								<a class="news-card" href="<?=$arItem["DETAIL_PAGE_URL"]?>">
                                <span class="news-card-img news-card-img--main">
                                    <div class="news-card-img-box">
                                        <img src="<?=$arItem["PREVIEW_PICTURE"]['SRC']?>" alt="<?=$arItem["PREVIEW_PICTURE"]['ALT']?>" title="<?=$arItem["PREVIEW_PICTURE"]['TITLE']?>">
                                    </div>
                                </span>
                                <div class="p-2" style="background-color: #ededed">
                                    <time datetime="2021-11-23 19:00"><?=$arItem["DISPLAY_ACTIVE_FROM"]?></time>
                                    <span class="news-card-title"><?=$arItem["NAME"]?></span>
                                    <span class="news-card-text"><?=$arItem["PREVIEW_TEXT"];?></span>
                                </div>
								</a>
								<div class="news-card-tag">
									<?foreach ($arTags as $arTag): $tag = trim($arTag);?>
									<a class="news-card-tag__link" href="/news/search/?tag=<?=$tag?>"><?=$arTag?></a>
									<?endforeach;?>
								</div>
							</div>
							<? 
							$check++;
							}
					else{ 
							?>
                        <div class="section-news-col" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
                            <div class="news-card" >
								<a class="news-card__link" href="<?=$arItem["DETAIL_PAGE_URL"]?>">
                                <span class="news-card-img">
                                    <div class="news-card-img-box">
                                        <img src="<?=$arItem["PREVIEW_PICTURE"]['SRC']?>" alt="<?=$arItem["PREVIEW_PICTURE"]['ALT']?>" title="<?=$arItem["PREVIEW_PICTURE"]['TITLE']?>">
                                    </div>
                                </span>
                                <div class="p-2" style="background-color: #ededed">
                                    <time datetime="2021-11-23 19:00"><?=$arItem["DISPLAY_ACTIVE_FROM"]?></time>
                                    <span class="news-card-title"><?=$arItem["NAME"]?></span>
                                    <span class="news-card-text"><?=$arItem["PREVIEW_TEXT"];?></span>
                                </div>
                           		</a>
								<div class="news-card-tag">
									<?foreach ($arTags as $arTag): $tag = trim($arTag);?>
									<a class="news-card-tag__link" href="/news/search/?tag=<?=$tag?>"><?=$arTag?></a>
									<?endforeach;?>
								</div>
							</div>
                        </div>
					<?}?>
                    <?endforeach;?>
                </div>
            </div>
        </div>
    </div>
	<div class="section-news-load-more">Показать еще</div>
</section>

<? $this->addExternalJS($this->GetFolder()."/script.js"); ?>