import React, { useEffect, useState } from 'react';

import QRCodeLink, { QRCodeToDataURLOptions } from 'qrcode';
import QRCode from 'react-qr-code';

import { colorsQrcode, extensionsQrcode } from '../../constants/customQrcode';
import CircleButton from '../CircleButton';
import Download from '../Download';
import Input from '../Input';
import InputColor from '../InputColor';
import {
  CodeGenerated,
  Container,
  CustomLeft,
  CustomRight,
  GeneratedCustom,
  Title
} from './styles';

const App: React.FC = () => {
  const [dataQrcode, setDataQrcode] = useState<string>('');
  const [qrcodeLink, setQrcodeLink] = useState<string>('');
  const [optionsQrcode, setOptionsQrcode] = useState<QRCodeToDataURLOptions>({
    type: extensionsQrcode[0].option,
    margin: 1,
    color: { dark: '' }
  });

  useEffect(() => {
    const handleGenerateQrcode = () => {
      if (dataQrcode.length > 0) {
        QRCodeLink.toDataURL(dataQrcode, optionsQrcode, (err, text) => {
          if (err) return console.error(err);

          setQrcodeLink(text);
        });
      }
    };

    handleGenerateQrcode();
  }, [dataQrcode, optionsQrcode]);

  const handleSetProp = (key: string, value: string | Object) => {
    setOptionsQrcode({ ...optionsQrcode, [key]: value });
  };

  return (
    <Container>
      <Title>
        Generate <span>QR Code</span>
      </Title>
      <p>Create your QR Code to share with the world</p>

      <Input
        name={'InputUrl'}
        placeholder="Enter your text"
        value={dataQrcode}
        onChange={e => setDataQrcode(e.target.value)}
      />

      <GeneratedCustom>
        <CustomLeft>
          {colorsQrcode.map((item, index) => (
            <CircleButton
              key={index}
              color={item.color}
              onClick={() => handleSetProp('color', { dark: item.color })}
            />
          ))}
          <InputColor
            name={'input-fg-color'}
            id="color-input"
            value={optionsQrcode.color?.dark}
            onChange={e => handleSetProp('color', { dark: e.target.value })}
          />
        </CustomLeft>
        <CodeGenerated>
          <QRCode
            value={dataQrcode}
            size={240}
            fgColor={optionsQrcode.color?.dark}
          />
          {dataQrcode && (
            <>
              <p>
                format: <span>{optionsQrcode.type?.replace('image/', '')}</span>
              </p>
              <Download dataString={qrcodeLink} name="qrcode" />
            </>
          )}
        </CodeGenerated>
        <CustomRight>
          {extensionsQrcode.map((item, index) => (
            <CircleButton
              key={index}
              color={'white'}
              onClick={() => handleSetProp('type', item.option)}
            >
              {item.extension}
            </CircleButton>
          ))}
        </CustomRight>
      </GeneratedCustom>
    </Container>
  );
};

export default App;
