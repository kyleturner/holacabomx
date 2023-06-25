import sharp from 'sharp';
import { B as BaseSSRService, i as isOutputFormatSupportsAlpha } from './prerender.f68974f5.mjs';
import 'kleur/colors';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import 'node:stream';
import 'mime';
import './astro.cd78f4a4.mjs';
import 'cookie';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'string-width';
import 'html-escaper';
/* empty css                          *//* empty css                           *//* empty css                            *//* empty css                           *//* empty css                           *//* empty css                           */import '@storyblok/js';
/* empty css                        */import 'svgo';

class SharpService extends BaseSSRService {
  async transform(inputBuffer, transform) {
    const sharpImage = sharp(inputBuffer, { failOnError: false, pages: -1 });
    sharpImage.rotate();
    if (transform.width || transform.height) {
      const width = transform.width && Math.round(transform.width);
      const height = transform.height && Math.round(transform.height);
      sharpImage.resize({
        width,
        height,
        fit: transform.fit,
        position: transform.position,
        background: transform.background
      });
    }
    if (transform.format) {
      sharpImage.toFormat(transform.format, { quality: transform.quality });
      if (transform.background && !isOutputFormatSupportsAlpha(transform.format)) {
        sharpImage.flatten({ background: transform.background });
      }
    }
    const { data, info } = await sharpImage.toBuffer({ resolveWithObject: true });
    return {
      data,
      format: info.format
    };
  }
}
const service = new SharpService();
var sharp_default = service;

export { sharp_default as default };
