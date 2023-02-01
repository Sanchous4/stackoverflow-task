import {AnyAction} from '@reduxjs/toolkit';

export type ActionReducer =
    | AsyncThunk<QuestionsShortResponse[] | [], void, AsyncThunkConfig>
    | AsyncThunk<
          QuestionDetails | null,
          {
              id: number;
          },
          AsyncThunkConfig
      >;
