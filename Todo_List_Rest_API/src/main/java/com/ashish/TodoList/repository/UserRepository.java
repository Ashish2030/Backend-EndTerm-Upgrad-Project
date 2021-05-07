package com.ashish.TodoList.repository;
import com.ashish.TodoList.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<Users,Integer>
{
    public List<Users> findByNameIgnoreCaseContaining(String name);

}
