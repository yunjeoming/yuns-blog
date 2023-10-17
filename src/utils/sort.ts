import { IPostMeta, SeriesType } from '@/types/post';
import { compareDesc } from 'date-fns';

export const SortUtil = {
  /**
   * 특정 메타 정보들을 날짜 내림차순으로 정렬
   * @param postMetas 특정 메타정보의 배열
   */
  compareDescDateByPostMetas(postMetas: IPostMeta[]) {
    return postMetas.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  },

  /**
   * ISeries 타입을 시리즈 이름기준으로 오름차순 정렬
   * @param seriesesArray [카테고리 이름, 메타정보 배열]의 배열 = 카테고리의 배열화
   */
  sortSeriesName(seriesesArray: SeriesType[]) {
    return seriesesArray.sort((a, b) => (a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0));
  },
};
