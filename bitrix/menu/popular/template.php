<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<div class="site-popular">
        <?
        foreach($arResult as $key=> $arItem):
            if($key > 3)
                continue;
            ?>
            <div class="site-popular-item">
                <a class="site-popular__link" href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a>
            </div>
        <?endforeach?>
</div>