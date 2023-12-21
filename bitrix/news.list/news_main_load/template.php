                <?foreach($arResult["ITEMS"] as $arItem):
						$arTags = explode(",", $arItem["TAGS"]);?>
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
                    <?endforeach;?>
                </div>