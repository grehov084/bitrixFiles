<?
use Bitrix\Main;
define("NO_KEEP_STATISTIC", true);
define("NOT_CHECK_PERMISSIONS", true);
include_once($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/classes/general/captcha.php"); 
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");

if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
	if(isset($_POST["captcha_word"]) && isset($_POST["captcha_sid"])){
		if(!empty($_POST["captcha_word"])){
			if($APPLICATION->CaptchaCheckCode($_POST["captcha_word"], $_POST["captcha_sid"])){
				$capchaFlag = true;
				$arr = array("capchaFlag" => $capchaFlag);
			}
			else{
				$capchaFlag = false;
				$arr = array("capchaFlag" => $capchaFlag);
			}
		}
		else{
			$capchaFlag = null;
			$arr = array("capchaFlag" => $capchaFlag);
		}
		echo json_encode($arr);
	}
?>