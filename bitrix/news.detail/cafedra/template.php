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

use Bitrix\Main\Type\DateTime;

$componentPath = $this->getFolder();
// подключаем class.php
require_once($_SERVER["DOCUMENT_ROOT"] . $componentPath . '/class.php');
$component = new CafedraNewsDetail();
$component->arResult = &$arResult;
$component->arParams = $arParams;
//$component->IncludeComponentLang($this->getRelativePath());
$component->executeComponent();

$this->setFrameMode(true);
?>
<section class="cafedra">
    <!--        --><?php //=  json_encode($arResult["PROPERTIES"]["EMPLOYEES"]); ?>
    <div class="container cafedra-container">
<!--        <div class="col-auto">-->
<!--            <div class="col-auto gap-3">-->
<!--                <span>Кабинет №--><?php //= $arResult["PROPERTIES"]["AUDIENCE"]["VALUE"] ?><!--</span>-->
<!--            </div>-->
<!--            <div class="col-auto gap-3">-->
<!--                <span>Телефон:</span>-->
<!--                <a href="tel:--><?php //= $arResult["PROPERTIES"]["PHONE"]["VALUE"] ?><!--">--><?php //= $arResult["PROPERTIES"]["PHONE"]["VALUE"] ?><!--</a>-->
<!--            </div>-->
<!--            <div class="col-auto gap-3">-->
<!--                <span>E-mail:</span>-->
<!--                <a href="mailto:--><?php //= $arResult["PROPERTIES"]["EMAIL"]["VALUE"] ?><!--">--><?php //= $arResult["PROPERTIES"]["EMAIL"]["VALUE"] ?><!--</a>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="col-auto">-->
<!--            <p>--><?php //= $arResult["DETAIL_TEXT"] ?><!--</p>-->
<!--        </div>-->

        <div class="d-flex flex-column justify-content-between gap-5">
            <div class="d-flex flex-column justify-content-between flex-lg-row gap-5">
                <div>
                    <div class="directs-activator-text mb-4">Заведующий кафедрой</div>
                    <div class="d-flex flex-column gap-3">
                        <div class="cafedra-staff-chief">
                            <div class="col-auto">
                                <div class="personnel-photo">
                                    <?
                                    if (!empty($arResult["PROPERTIES"]["LEAD"])) {
                                        ?>
                                        <div>
                                            <img style="width: 100%"
                                                 src="<?= $arResult["PROPERTIES"]["LEAD"]["LINKED_IBLOCK_ELEMENT"]['PREVIEW_PICTURE']['SRC'] ?>"
                                                 alt="<?= $arResult["PROPERTIES"]["LEAD"]["LINKED_IBLOCK_ELEMENT"]['PREVIEW_PICTURE']['ALT'] ?>">
                                        </div>
                                        <?
                                    } else {
                                        ?>
                                        <div><img style="width: 100%"
                                                  src="<?= SITE_TEMPLATE_PATH ?>/assets/images/cdoimk-empty.png"></div>
                                        <?
                                    }
                                    ?>
                                </div>
                            </div>
                            <div class="col-sm col-xl-8">
                                <div class="teacher-main mt-1">
                                    <p><?= $arResult["PROPERTIES"]["LEAD"]["LINKED_IBLOCK_ELEMENT"]["NAME"] ?></p>
                                    <span><?= $arResult["PROPERTIES"]["LEAD"]["LINKED_IBLOCK_ELEMENT"]["PROPERTIES"]["DEGREE"]["VALUE"] ?></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="directs-activator-text mb-4">Информация</div>
                    <div class="col-auto">
                        <div class="col-auto gap-3">
                            <span>Кабинет №<?= $arResult["PROPERTIES"]["AUDIENCE"]["VALUE"] ?></span>
                        </div>
                        <div class="col-auto gap-3">
                            <span>Телефон:</span>
                            <a href="tel:<?= $arResult["PROPERTIES"]["PHONE"]["VALUE"] ?>"><?= $arResult["PROPERTIES"]["PHONE"]["VALUE"] ?></a>
                        </div>
                        <div class="col-auto gap-3">
                            <span>E-mail:</span>
                            <a href="mailto:<?= $arResult["PROPERTIES"]["EMAIL"]["VALUE"] ?>"><?= $arResult["PROPERTIES"]["EMAIL"]["VALUE"] ?></a>
                        </div>
                    </div>
                    <div class="col-auto mt-1 mt-lg-3">
                        <p><?= $arResult["DETAIL_TEXT"] ?></p>
                    </div>
                </div>
            </div>
            <div class="cafedra-staff">
                <div class="cafedra-title">Преподавательский состав</div>
                <div class="cafedra-staff-list">
                    <? foreach ($arResult["PROPERTIES"]["EMPLOYEES"]["LINKED_IBLOCK_ELEMENTS"] as $EMPLOYEE): ?>
                        <div class="cafedra-staff__elem">
                            <div class="col-auto">
                                <div class="personnel-photo">
                                    <?
                                    if (!empty($EMPLOYEE)) {
                                        ?>
                                        <div>
                                            <img style="width: 100%"
                                                 src="<?= $EMPLOYEE['PREVIEW_PICTURE']['SRC'] ?>"
                                                 alt="<?= $EMPLOYEE['PREVIEW_PICTURE']['ALT'] ?>">
                                        </div>
                                        <?
                                    } else {
                                        ?>
                                        <div><img style="width: 100%"
                                                  src="<?= SITE_TEMPLATE_PATH ?>/assets/images/cdoimk-empty.png"></div>
                                        <?
                                    }
                                    ?>
                                </div>
                            </div>
                            <div class="col-sm col-xl-8">
                                <div class="teacher-main mt-1">
                                    <p><?= $EMPLOYEE["NAME"] ?></p>
                                    <span><?= $EMPLOYEE["PROPERTIES"]["DEGREE"]["VALUE"] ?></span>
                                </div>
                            </div>
                        </div>
                    <? endforeach; ?>

                </div>
            </div>
        </div>
    </div>
</section>