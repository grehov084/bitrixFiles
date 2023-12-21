<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

if (empty($arResult["ALL_ITEMS"]))
	return;

if (file_exists($_SERVER["DOCUMENT_ROOT"].$this->GetFolder().'/themes/'.$arParams["MENU_THEME"].'/colors.css'))
	$APPLICATION->SetAdditionalCSS($this->GetFolder().'/themes/'.$arParams["MENU_THEME"].'/colors.css');

CJSCore::Init();

$menuBlockId = "catalog_menu_".$this->randString();
?><div class="menu-mobile" id="<?=$menuBlockId?>">
	<ul class="nav nav-navbar" id="ul_<?=$menuBlockId?>">
	<?foreach($arResult["MENU_STRUCTURE"] as $itemID => $arColumns):?>     <!-- first level-->
		<?$existPictureDescColomn = ($arResult["ALL_ITEMS"][$itemID]["PARAMS"]["picture_src"] || $arResult["ALL_ITEMS"][$itemID]["PARAMS"]["description"]) ? true : false;?>
		<li class="dropdown dropdown--page">
			<a class="dropdown__link" href="<?=$arResult["ALL_ITEMS"][$itemID]["LINK"]?>" <?if (is_array($arColumns) && count($arColumns) > 0 && $existPictureDescColomn):?>onmouseover="BX.CatalogVertMenu.changeSectionPicture(this);"<?endif?>>
				<?=$arResult["ALL_ITEMS"][$itemID]["TEXT"]?>
				<span class="bx_shadow_fix"></span>
			</a>
		<?if (is_array($arColumns) && count($arColumns) > 0):?>
			<div class="dropdown-toggle">
						<svg class="dropdown-toggle-button" width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path class="dropdown-toggle-button" d="M33 20L25 30L17 20" stroke="#fff" stroke-width="4"></path>
						</svg>
			</div>
			<div class="dropdown-menu">
				<?foreach($arColumns as $key=>$arRow):?>
				<div class="bx_children_block">
					<ul>
					<?foreach($arRow as $itemIdLevel_2=>$arLevel_3):?>  <!-- second level-->
						<li class="parent">
							<a class="dropdown__link" href="<?=$arResult["ALL_ITEMS"][$itemIdLevel_2]["LINK"]?>" <?if ($existPictureDescColomn):?>ontouchstart="document.location.href = '<?=$arResult["ALL_ITEMS"][$itemIdLevel_2]["LINK"]?>';" onmouseover="BX.CatalogVertMenu.changeSectionPicture(this);"<?endif?> data-picture="<?=$arResult["ALL_ITEMS"][$itemIdLevel_2]["PARAMS"]["picture_src"]?>">
								<?=$arResult["ALL_ITEMS"][$itemIdLevel_2]["TEXT"]?>
							</a>
						</li>
					<?endforeach;?>
					</ul>
				</div>
				<?endforeach;?>
				<div style="clear: both;"></div>
			</div>
		<?endif?>
		</li>
	<?endforeach;?>
	</ul>
	<div style="clear: both;"></div>
</div>