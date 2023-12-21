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
?>
<section class="home-carousel">
    <div class="home-carousel-main swiper">
        <div class="swiper-wrapper">
            <?foreach($arResult["ITEMS"] as $arItem):?>
                <?
                $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
                ?>
                <div class="home-carousel-slide swiper-slide"  id="<?=$this->GetEditAreaId($arItem['ID']);?>">
                    <div class="home-carousel-slide-bg">
                        <?if(is_array($arItem["PREVIEW_PICTURE"])):?>
                            <img
                                    src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>"
                                    alt="<?=$arItem["PREVIEW_PICTURE"]["ALT"]?>"
                                    title="<?=$arItem["PREVIEW_PICTURE"]["TITLE"]?>"
                            />
                        <?endif?>
                    </div>
					<?if(strpos($arItem["NAME"], ' ') != 0){?>
                    <div class="home-carousel-slide-body">
                    <div class="container">
                        <div class="home-carousel-slide-box">
                            <div class="home-carousel-slide-darker">
                            </div>
                            <div class="home-carousel-slide-content">
                                <div class="home-carousel-slide-title">
                                    <?
                                        $titles = explode(' ',$arItem["NAME"]);

                                        $title = '';
                                        if(count($titles) > 1){
                                            $i = 0;
                                            foreach($titles as $t){
                                                $title .= $t;
                                                if($i+1 < count($titles)){
                                                    $title .= ' ';
                                                }
                                                if(($i+2)==count($titles)){
                                                    $title .=  ' <span>' ;
                                                }
                                                $i++;
                                            }
                                        }
                                        else {
                                            $title = $arItem["NAME"].'<span>';
                                        }
                                    ?>
                                    <?if($arItem["DISPLAY_PROPERTIES"]["LINK"]["VALUE"]){ ?>
                                        <a href="<?=$arItem["DISPLAY_PROPERTIES"]["LINK"]["VALUE"]?>">
                                    <?
                                    }
                                    ?>
                                        <?=$title?>
                                                <?if($arItem["DISPLAY_PROPERTIES"]["LINK"]["VALUE"]){ ?>
                                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#FFFFFF" stroke-width="8" d="M3,32L31,4 M35,4H3 M31,0v32"/></svg>
                                                <?
                                                }
                                                ?>
                                            </span>
                                            <?if($arItem["DISPLAY_PROPERTIES"]["LINK"]["VALUE"]){ ?>
                                        </a>
                                <?
                                }
                                ?>
                                </div>
                                <div class="home-carousel-slide-text">
                                    <?=$arItem["~PREVIEW_TEXT"];?>
                                </div>
                                <?
                                if($arItem["DISPLAY_PROPERTIES"]["LINK"]["VALUE"]){
                                    ?>
                                    <div class="home-carousel-slide-btn">
                                        <a class="btn _outline" href="<?=$arItem["DISPLAY_PROPERTIES"]["LINK"]["VALUE"]?>">
										<? if(!empty($arItem["DISPLAY_PROPERTIES"]["BUTTON_TEXT"]["VALUE"]))
											{ echo $arItem["DISPLAY_PROPERTIES"]["BUTTON_TEXT"]["VALUE"];}
											else {echo "Подробнее";}?>
										</a>
                                    </div>
                                <?
                                }
                                ?>

                            </div>
                        </div>
                    </div>
                </div>
				<?}?>
                </div>
            <?endforeach;?>
        </div>
        <div class="home-carousel-dots carousel-dots"></div>
    </div>
</section>