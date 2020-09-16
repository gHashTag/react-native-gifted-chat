import { isSameDay, isSameUser } from '../utils'

it('should test if same day', () => {
  const now = new Date()
  expect(
    isSameDay(
      {
        id: 1,
        text: 'test',
        createdAt: now,
        user: { id: 1 },
      },
      {
        id: 2,
        text: 'test2',
        createdAt: now,
        user: { id: 2 },
      },
    ),
  ).toBe(true)
})

it('should test if same user', () => {
  const message = {
    id: 1,
    text: 'test',
    createdAt: new Date(),
    user: { id: 1 },
  }
  expect(isSameUser(message, message)).toBe(true)
})
