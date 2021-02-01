module Pagination
  def resources_with_pagination(resources)
    {
      data: resources,
      pagination: {
        current: resources.current_page,
        prev: resources.prev_page,
        next: resources.next_page,
        limit: resources.limit_value,
        pages: resources.total_pages,
        count: resources.total_count
      }
    }
  end
end
