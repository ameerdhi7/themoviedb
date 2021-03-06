// TVS V3
export default {
  /**
   * Get the primary TV show details by id.
   * @param {number} tv_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id
   * @param {string} options.guest_session_id
   * @param {string} options.append_to_response - Example: 'account_states,alternative_titles,changes,content_ratings,credits,episode_groups,external_ids,images,keywords,recommendations,reviews,screened_theatrically,similar,translations,videos'
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvShow(tv_id, options) {
    return this.getV3(`tv/${tv_id}`, {
      ...this.metas(["api_key", "language", "session_id", "guest_session_id"]),
      ...options
    });
  },

  /**
   * Grab the following account states for a session:
   * @param {number} tv_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id
   * @param {string} options.guest_session_id
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvShowAccountStates(tv_id, options) {
    return this.getV3(`tv/${tv_id}/account_states`, {
      ...this.metas(["api_key", "language", "session_id", "guest_session_id"]),
      ...options
    });
  },

  /**
   * Returns all of the alternative titles for a TV show.
   * @param {number} tv_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvShowAlternativeTitles(tv_id, options) {
    return this.getV3(`tv/${tv_id}/alternative_titles`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the changes for a TV show. By default only the last
   * 24 hours are returned.
   * @param {number} tv_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvShowChanges(tv_id, options) {
    return this.getV3(`tv/${tv_id}/changes`, {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get the list of content ratings (certifications) that
   * have been added to a TV show.
   * @param {number} tv_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvShowContentRatings(tv_id, options) {
    return this.getV3(`tv/${tv_id}/content_ratings`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the credits (cast and crew) that have been added
   * to a TV show.
   * @param {number} tv_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvShowCredits(tv_id, options) {
    return this.getV3(`tv/${tv_id}/credits`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get all of the episode groups that have been created
   * for a TV show.
   * @param {number} tv_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvShowEpisodeGroups(tv_id, options) {
    return this.getV3(`tv/${tv_id}/episode_groups`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the external ids for a TV show. We currently
   * support the following external sources.
   * @param {number} tv_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvShowExternalIds(tv_id, options) {
    return this.getV3(`tv/${tv_id}/external_ids`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the images that belong to a TV show.
   * @param {number} tv_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.include_image_language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvShowImages(tv_id, options) {
    return this.getV3(`tv/${tv_id}/images`, {
      ...this.metas(["api_key", "language", "include_image_language"]),
      ...options
    });
  },

  /**
   * Get the keywords that have been added to a TV show.
   * @param {number} tv_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvShowKeywords(tv_id, options) {
    return this.getV3(`tv/${tv_id}/keywords`, {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get the list of TV show recommendations for this item.
   * @param {number} tv_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvShowRecommendations(tv_id, options) {
    return this.getV3(`tv/${tv_id}/recommendations`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the reviews for a TV show.
   * @param {number} tv_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvShowReviews(tv_id, options) {
    return this.getV3(`tv/${tv_id}/reviews`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get a list of seasons or episodes that have been
   * screened in a film festival or theatre.
   * @param {number} tv_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvShowScreenedTheatrically(tv_id, options) {
    return this.getV3(`tv/${tv_id}/screened_theatrically`, {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get a list of similar TV shows. These items are
   * assembled by looking at keywords and genres.
   * @param {number} tv_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvShowSimilar(tv_id, options) {
    return this.getV3(`tv/${tv_id}/similar`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get a list of the translations that exist for a TV show.
   * @param {number} tv_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvShowTranslations(tv_id, options) {
    return this.getV3(`tv/${tv_id}/translations`, {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get the videos that have been added to a TV show.
   * @param {number} tv_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvShowVideos(tv_id, options) {
    return this.getV3(`tv/${tv_id}/videos`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Rate a TV show.
   * @param {number} tv_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.session_id
   * @param {string} options.guest_session_id
   * @param {Object} body
   * @param {number} body.value - Required, min:0.5, max:10
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  rateTvShow(tv_id, options, body) {
    return this.postV3(
      `tv/${tv_id}/rating`,
      {
        ...this.metas(["api_key", "session_id", "guest_session_id"]),
        ...options
      },
      body
    );
  },

  /**
   * Remove your rating for a TV show.
   * @param {number} tv_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.session_id
   * @param {string} options.guest_session_id
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  deleteTvShowRating(tv_id, options) {
    return this.postV3(
      `tv/${tv_id}/rating`,
      {
        ...this.metas(["api_key", "session_id", "guest_session_id"]),
        ...options
      },
      {},
      "DELETE"
    );
  },

  /**
   * Get the most newly created TV show. This is a live
   * response and will continuously change.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getLatestTvShow(options) {
    return this.getV3("tv/latest", {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get a list of TV shows that are airing today. This
   * query is purely day based as we do not currently
   * support airing times.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getAiringTodayTvShows(options) {
    return this.getV3("tv/airing_today", {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get a list of shows that are currently on the air.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getOnTheAirTvShows(options) {
    return this.getV3("tv/on_the_air", {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get a list of the current popular TV shows on TMDb.
   * This list updates daily.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getPopularTvShows(options) {
    return this.getV3("tv/popular", {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get a list of the top rated TV shows on TMDb.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTopRatedTvShows(options) {
    return this.getV3("tv/top_rated", {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  }
};
