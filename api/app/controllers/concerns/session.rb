module Session
  def self.get(token)
    REDIS.hgetall(token)
  end

  def self.login(user)
    token = SecureRandom.hex(64).freeze
    REDIS.mapped_hmset(
      token,
      'user_id' => user.id
    )
    REDIS.expire(token, Settings.session.timeout)
    token
  end

  def self.logout(token)
    return unless token && REDIS.exists(token)

    REDIS.del(token)
  end
end
