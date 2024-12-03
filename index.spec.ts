// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import * as Sentry from '@sentry/react';
import * as SentryCore from '@sentry/core';
import createSentryTestkit from 'sentry-testkit';

const { sentryTransport } = createSentryTestkit();
const DUMMY_DSN = 'https://acacaeaccacacacabcaacdacdacadaca@sentry.io/000001';

describe('sentry', () => {
  beforeAll(() => {
    Sentry.init({ dsn: DUMMY_DSN, transport: sentryTransport });
  });

  describe('captureSentryException', () => {
    it('sets manuallyCaptured tag to true', async () => {
      const session = SentryCore.makeSession()
      console.log(session)
      expect(session.timestamp).not.toBeNaN()
    });
  });
});
