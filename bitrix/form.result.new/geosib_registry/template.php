<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<?if($arResult["arForm"]["SHOW_MODAL"] == "Y"){?>
	<div class="message">
			<div class="messgage-form success">
				<div class="message-close">
					X
				</div>
				<div class="message-content">
					<div class="success-title">
						
					</div>
					<div class="success-ico"></div>
					<div class="success-button-wrap">
						<button class="close-modal">ОК</button>
					</div>
				</div>
			</div>
		</div>
	<div class="modal">
		<div class="modal__dialog">
			<form method="POST" class="<?=$arResult["WEB_FORM_NAME"]?>">
				<div class="<?=$arResult["WEB_FORM_NAME"]?>-container">
				<div class="modal-title-container">
					<div class="modal-title"><?=$arResult["arForm"]["NAME"]?></div>
					<div class="modal__close">x</div>
				</div>
					<?if ($arResult["isFormErrors"] == "Y"):?>
						<div class="errors">
							<?=$arResult["FORM_ERRORS_TEXT"];?>
						</div>	
					<?endif;?>
				<input type="hidden" id="iblock_id" name="iblock_id" value="<?=$arParams["IBLOCK_URL"]?>">
				<input type="hidden" id="template_path" value="<?=$this->GetFolder()?>">
				<?=$arResult["FORM_NOTE"]?>
				<?if ($arResult["isFormNote"] != "Y") {?>
				<p>
					<?=$arResult["REQUIRED_SIGN"];?> - <?=GetMessage("FORM_REQUIRED_FIELDS")?>
				</p>
				<?foreach ($arResult["QUESTIONS"] as $FIELD_SID => $arQuestion){?>
					<div class="<?=$arResult["WEB_FORM_NAME"]?>__elem"><?
						if ($arQuestion['STRUCTURE'][0]['FIELD_TYPE'] == 'hidden')
						{
							echo $arQuestion["HTML_CODE"];
						}
						else
						{
					?>
						<tr>
							<td>
								<?if (is_array($arResult["FORM_ERRORS"]) && array_key_exists($FIELD_SID, $arResult['FORM_ERRORS'])):?>
								<span class="error-fld" title="<?=htmlspecialcharsbx($arResult["FORM_ERRORS"][$FIELD_SID])?>"></span>
								<?endif;?>
								<label><?=$arQuestion["CAPTION"]?><?if ($arQuestion["REQUIRED"] == "Y"):?><?=$arResult["REQUIRED_SIGN"];?><?endif;?></label>
								<?=$arQuestion["IS_INPUT_CAPTION_IMAGE"] == "Y" ? "<br />".$arQuestion["IMAGE"]["HTML_CODE"] : ""?>
							</td>
							<td><?=$arResult['funcGetInputHtml']($arQuestion, $arResult['arrVALUES'], $arResult["WEB_FORM_NAME"], $arParams['IBLOCK_URL']);?>
						</td>
					</tr>
					<?
						}
						?></div><?
					} //endwhile
					?>
							<?
						if($arResult["arForm"]["PERSONEL_DATA"] == "Y"){
					?>
					<div class="<?=$arResult["WEB_FORM_NAME"]?>__elem">
						<input type="checkbox" name="personelData" id="personelData" class="personel-data">
						<label for="personelData" class="personel-label">Я согласен(на) с <a href="/upload/tmp/Политика СГУГиТ в отношении обработки персональных данных.pdf" target="_blank">политикой обработки персональных данных</a></label>
					</div>
					<?}?>
					<div class="form-capcha">
						<?
						if ($arResult["isUseCaptcha"] === true): ?>
						<input type="hidden" id="captcha_sid" name="captcha_sid" value="<?=$arResult["CAPTCHACode"]?>">
							<img id="captcha_img"
								src="/bitrix/tools/captcha.php?captcha_sid=<?=$arResult["CAPTCHACode"]?>">
							Введите код с картинки:
							<span id="refresh_captcha">Обновить картинку</span>
							<?=$arResult["CAPTCHA_FIELD"];
							if($APPLICATION->CaptchaCheckCode($_POST["captcha_word"], $_POST["captcha_sid"])){
								$captchaFlag = true;
							}
							endif; ?>
					</div>
				<div class="button-container">
					<input class="<?=$arResult["WEB_FORM_NAME"]?>-button"  id="sm" type="submit" value="<?=$arResult["arForm"]["BUTTON"]?>">
				</div>
				</div>
			</form>
	<?
	} 
	?>
		</div>
	</div>
	<div class="modal-button-container">
			<button class="modal-button" data-toggle="modal">SAME TEXT</button>
	</div>
<?}
else{?>
		<div class="message">
			<div class="messgage-form success">
				<div class="message-close">
					X
				</div>
				<div class="message-content">
					<div class="success-title">
						
					</div>
					<div class="success-ico"></div>
					<div class="success-button-wrap">
						<button class="close-modal">ОК</button>
					</div>
				</div>
			</div>
		</div>
	</div>
<form method="POST" class="<?=$arResult["WEB_FORM_NAME"]?>">
	<div class="<?=$arResult["WEB_FORM_NAME"]?>-container">
		<?if ($arResult["isFormErrors"] == "Y"):?>
			<div class="errors">
				<?=$arResult["FORM_ERRORS_TEXT"];?>
			</div>	
		<?endif;?>
		<input type="hidden" id="iblock_id" name="iblock_id" value="<?=$arParams["IBLOCK_URL"]?>">
		<input type="hidden" id="template_path" value="<?=$this->GetFolder()?>">
	<?=$arResult["FORM_NOTE"]?>
	<?if ($arResult["isFormNote"] != "Y") {
	?>
	<p>
	<?=$arResult["REQUIRED_SIGN"];?> - <?=GetMessage("FORM_REQUIRED_FIELDS")?>
	</p>
	<?
		foreach ($arResult["QUESTIONS"] as $FIELD_SID => $arQuestion)
		{
		?><div class="<?=$arResult["WEB_FORM_NAME"]?>__elem"><?
			if ($arQuestion['STRUCTURE'][0]['FIELD_TYPE'] == 'hidden')
			{
				echo $arQuestion["HTML_CODE"];
			}
			else
			{
		?>
			<tr>
				<td>
					<?if (is_array($arResult["FORM_ERRORS"]) && array_key_exists($FIELD_SID, $arResult['FORM_ERRORS'])):?>
					<span class="error-fld" title="<?=htmlspecialcharsbx($arResult["FORM_ERRORS"][$FIELD_SID])?>"></span>
					<?endif;?>
					<label><?=$arQuestion["CAPTION"]?><?if ($arQuestion["REQUIRED"] == "Y"):?><?=$arResult["REQUIRED_SIGN"];?><?endif;?></label>
					<?=$arQuestion["IS_INPUT_CAPTION_IMAGE"] == "Y" ? "<br />".$arQuestion["IMAGE"]["HTML_CODE"] : ""?>
				</td>
				<td><?=$arResult['funcGetInputHtml']($arQuestion, $arResult['arrVALUES'], $arResult["WEB_FORM_NAME"], $arParams['IBLOCK_URL']);?>
			</td>
		</tr>
		<?
			}
			?></div><?
		} //endwhile
		?>
				<?
			if($arResult["arForm"]["PERSONEL_DATA"] == "Y"){
		?>
		<div class="<?=$arResult["WEB_FORM_NAME"]?>__elem">
			<input type="checkbox" name="personelData" id="personelData" class="personel-data">
			<label for="personelData" class="personel-label">Я согласен(на) с <a href="/upload/tmp/Политика СГУГиТ в отношении обработки персональных данных.pdf" target="_blank">политикой обработки персональных данных</a></label>
		</div>
		<?}?>
		<div class="form-capcha">
			<?
			if ($arResult["isUseCaptcha"] === true): ?>
			<input type="hidden" id="captcha_sid" name="captcha_sid" value="<?=$arResult["CAPTCHACode"]?>">
				<img id="captcha_img"
					src="/bitrix/tools/captcha.php?captcha_sid=<?=$arResult["CAPTCHACode"]?>">
				Введите код с картинки:
				<span id="refresh_captcha">Обновить картинку</span>
				<?=$arResult["CAPTCHA_FIELD"];
				if($APPLICATION->CaptchaCheckCode($_POST["captcha_word"], $_POST["captcha_sid"])){
					$captchaFlag = true;
				}
				endif; ?>
		</div>

	<input class="<?=$arResult["WEB_FORM_NAME"]?>-button"  id="sm" type="submit" value="<?=$arResult["arForm"]["BUTTON"]?>">

	</div>
</form>
<?
	}
} //endif (isFormNote)
$this->addExternalJS($this->GetFolder()."/ajax.js");
$this->addExternalJS($this->GetFolder()."/script.js");
?>

