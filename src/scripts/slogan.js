import MarqueeInfinite from 'marquee-infinite';

new MarqueeInfinite('.js-marquee-infinite', {
  maxItems: 10,
  duration: 15000,
  classNames: {
    container: 'marqueeInfinite',
    slider: 'marqueeInfiniteSlider',
    cell: 'marqueeInfiniteCell',
  },
});
