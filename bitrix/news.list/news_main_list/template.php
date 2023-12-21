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
$counter = 0;
CJSCore::Init(array('date')); 
?>
<section class="section-news" style="padding-top: 30px;">
    <div class="container">
		<form class="section-news-filter" action="/news/" method="POST">
				<div class="section-filter-title">
					Фильтровать по дате:
				</div>
				<div class="section-news-action">
					<div class="section-news-input">
						<input class="section-news__input" id="newsFilter_DATE_ACTIVE_FROM_1" name="newsFilter_DATE_ACTIVE_FROM_1" value="<?$_POST["newsFilter_DATE_ACTIVE_FROM_1"]?>" type="text" placeholder="с">
						<span class="icon calendar" onclick="BX.calendar({node:this, field:'newsFilter_DATE_ACTIVE_FROM_1', form: 'section-news-filte', bTime: false, currentTime: '1695955202', bHideTime: false});"></span>
					</div>
					<div class="section-news-input">
						<input class="section-news__input" id="newsFilter_DATE_ACTIVE_FROM_2" name="newsFilter_DATE_ACTIVE_FROM_2" value="<?$_POST["newsFilter_DATE_ACTIVE_FROM_2"]?>" type="text" placeholder="по">
						<span class="icon calendar" onclick="BX.calendar({node:this, field:'newsFilter_DATE_ACTIVE_FROM_2', form: 'section-news-filte', bTime: false, currentTime: '1695955202', bHideTime: false});"></span>
					</div>
					<div class="section-news-buttons">
						<input type="submit" class="section-news__input section-news-input__button" value="Фильтровать">
						<input type="submit" class="section-news__input section-news-input__button" value="Сбросить">
					</div>
				</div>
			</form>
		<div class="section-news-main">
            <div class="section-news-list">
                <div class="section-news-row">
                    <?foreach($arResult["ITEMS"] as $arItem):
						$arTags = explode(",", $arItem["TAGS"]);?>
						<? if(intval($arItem["DISPLAY_PROPERTIES"]["MAIN_NEWS"]["VALUE_XML_ID"]) == 1){?>
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
							<?}
					else{ 
							?>
                        <div class="section-news-col border-1 ms-0 me-0" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
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
		<?}
			$counter++;
		?>
                    <?endforeach;?>
                </div>
            </div>
        </div>
		<?if($counter >= 12){?>
			<div class="section-news-load-more">Показть еще</div>
		<?}?>
<?
						/*
if($arParams["DISPLAY_BOTTOM_PAGER"]):?>
 <?=$arResult["NAV_STRING"]?>
<?endif;
*/
?>
    </div>
</section>
<?
$this->addExternalJS($this->GetFolder()."/script.js");
?>