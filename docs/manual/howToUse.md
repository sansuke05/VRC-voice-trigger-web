# VRChat Voice Trigger

## 注意事項

Google Chrome 以外のブラウザでは正しく動作しませんので使用する際は予めデフォルトのブラウザに Google Chrome を設定するようお願いします

## 基本的な使い方

1. voice_trigger.exe を開きます

2. ブラウザが開いてwebページが表示されるのでワールド選択メニューから行きたいワールドを選択します

3. 「音声認識開始」ボタンを押します

4. VRChatで選択したワールドに移動し、ワールドに設定されたトリガーに対応した言葉を話すとワールドオブジェクトが反応します

## ワールドのVoiceTrigger設定データの導入

デフォルトでは、デモワールドの設定データのみ入っていますが、自分でVoiceTriggerが使えるワールドを制作したり、他の人が作ったワールドのVoiceTriggerデータを導入する事で、そのワールドでVoiceTriggerを使えるようになります。

ワールドの制作方法や、VoiceTrigger設定データの制作方法については、**VRChat Voice Triggerの使えるワールドの制作について** をご覧下さい。ここではその設定データを導入する方法について記載します。

以下のように、VoiceTriggerを一度でも起動すると、アプリと一緒に「TeiggerSettings」フォルダが作成されます。

[フォルダの画像]

この「TeiggerSettings」フォルダの中に、「●●.json」形式のVoiceTrigger設定データを置きます。

[TeiggerSettingsフォルダにjsonファイルが置かれた画像]

この状態で voice_trigger.exe を起動するとwebページのワールド選択メニューに先ほどの設定データのワールド名が出てくれば、導入成功です。

[webページの画像]

## サンプルワールドについて

- webページのワールド選択メニューから「VoiceTriggerTesting」ワールドを選択します。

- 「ワールドを開く」ボタンか[こちら](https://vrchat.com/home/world/wrld_5d9e20c4-b510-4c80-83d9-ac0f95596dd9)にアクセスしてサンプルワールドを開くか、私(VRCID:sansuke05)がサンプルワールド(VoiceTriggerTesting)を開いているときにjoinすることで VRChat Voice Trigger を体験していただくことができます。

## VRChat Voice Triggerの使えるワールドの制作について

ここでは VRChat Voice Trigger の使えるワールドを制作する為の簡単な概要について記載します。

### OSCメッセージを受信するワールドの制作

Voice Triggerを使えるワールドを制作するためには`VRChat SDK`の`VRC_OscButtonIn`を設定したワールドを制作します。

具体的な`VRC_OscButtonIn`とTriggerの設定方法については、じぇしかさんの[こちら](https://jscmla1118.hatenablog.com/entry/2018/11/10/184833)の記事の **OSCメッセージ受信側の実装** の箇所を参考に制作してみてください。

### VoceTrigger設定データの作成方法

Voice Trigger 設定データは以下の画像のような構造になっています。

![VoiceTrigger設定データ画像](img/TriggerSetting.png)

上記の画像に対応した`VRC_Osc Button In`の項目と、Button On/Off時のキーワードを記載すれば設定データを作ることができます。

## 免責事項

このソフトウェアを使用して生じたいかなる障害について、開発者であるサンスケ(sansuke05)は一切の責任を負いかねます。

## お知らせ

このプログラムのソースコードは以下のサイトにてオープンソースで公開されています。

アプリ本体：https://github.com/sansuke05/VRC-voice-trigger-local-server (MITライセンス)

webページ：https://github.com/sansuke05/VRC-voice-trigger-web