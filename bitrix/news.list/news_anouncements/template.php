<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
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

$months = array(
        "1" => "Января",
        "2" => "Февраля",
        "3" => "Марта",
        "4" => "Апреля",
        "5" => "Мая",
        "6" => "Июня",
        "7" => "Июля",
        "8" => "Августа",
        "9" => "Сентября",
        "10" => "Октября",
        "11" => "Ноября",
        "12" => "Февраля",
)

?><link rel="stylesheet" href="/local/templates/main2/components/bitrix/news.list/news_anouncements/style.css">
<section class="section-news section-news--events">
    <div class="container" style="display: grid;">
		<div class="section-top">
			<h2 class="section-title">
				<?= $arParams["DISPLAY_SECTION_NAME"] ?>
			</h2>
				<div class="section-news-all order-md-1"><a class="title-link"
															href="/events/"><span>Все <?= $arParams["DISPLAY_SECTION_NAME"] ?></span>
	
					</a></div>
		</div>
        <div class="section-news-main section-news-main--events">
            <div class="section-news-list">
                <div class="section-news-row order-md-2" style="margin-left: 0; margin-right: 0;">
                    <? foreach ($arResult["ITEMS"] as $arItem): ?>
                        <?
                        $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                        $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
                        ?>
                        <div class="section-news-row border-1" style="margin-left: 0; margin-right: 0;"
                             id="<?= $this->GetEditAreaId($arItem['ID']); ?>">
                            <? $eventDate = DateTime::createFromFormat('d.m.Y h:i:s', $arItem["PROPERTIES"]["EVENT_DATE"]["VALUE"]); ?>
                            <a class="news-card news-card--event" href="<?= $arItem["DETAIL_PAGE_URL"] ?>">
                                <span class="news-card-img">
                                    <div class="news-card-img-box">
                                        <img src="<?= $arItem["PREVIEW_PICTURE"]['SRC'] ?>"
                                             alt="<?= $arItem["PREVIEW_PICTURE"]['ALT'] ?>"
                                             title="<?= $arItem["PREVIEW_PICTURE"]['TITLE'] ?>">
                                    </div>
                                  <? if ($eventDate): ?>
                                        <div class="news-card-date">

                                            <div class="news-card-date--day">
												<?= date_format($eventDate, 'd'); ?>
                                            </div>
                                            <div class="news-card-date--month">
												<?= $months[date_format($eventDate, 'n')]; ?>
                                            </div>
                                            <div class="news-card-date--time">
                                                <?= date_format($eventDate, 'h:i'); ?>
                                            </div>
                                        </div>
                                        <? endif; ?>
                                </span>
                                <div class="events__text">
<!--                                    <time datetime="2021-11-23 19:00">--><?php //= $arItem["DISPLAY_ACTIVE_FROM"] ?><!--</time>-->
                                    <span class="news-card-title"><?= $arItem["NAME"] ?></span>
                                    <span class="news-card-text"><?= $arItem["PREVIEW_TEXT"]; ?></span>
                                </div>

                            </a>
                        </div>
                    <?endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>