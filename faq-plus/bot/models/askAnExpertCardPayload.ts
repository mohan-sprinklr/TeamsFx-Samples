// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TeamsAdaptiveSubmitActionData } from "./teamsAdaptiveSubmitActionData";

/**
 * Represents the submit data associated with the Ask An Expert card.
 */
export interface AskAnExpertCardPayload extends TeamsAdaptiveSubmitActionData {
  /**
   *User title text for ask an expert button.
   */
  Title?: string;

  /**
   * Question for the expert being asked by the user through bot command.
   */
  Description: string;

  /**
   * Question for the expert being asked by the user through Response card-
   * Response Card: Response generated by the bot to user question by calling QnA Maker service.
   */
  UserQuestion: string;

  /**
   * Answer for the expert- Answer sent to the SME team along with feedback
   * provided by the user on response given by bot calling QnA Maker service.
   */
  KnowledgeBaseAnswer: string;
}
